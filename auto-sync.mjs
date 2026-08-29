#!/usr/bin/env node
/* Auto-sync local -> GitHub -> GitHub Pages.
   Surveille les fichiers de la plateforme + docs. À chaque modif (debounce 2,5 s),
   commit + push sur main. GitHub Pages redéploie tout seul (~1 min).
   Lancer : node auto-sync.mjs   (le laisser tourner en tâche de fond)
   Arrêter : Ctrl+C */
import { watch } from "node:fs";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const run = promisify(execFile);
const ROOT = new URL(".", import.meta.url).pathname;
const IGNORE = [".git", "skills-lab", "node_modules", ".DS_Store", ".wrangler"];
let timer = null;
let busy = false;
let again = false;

function ignored(name) {
  return !name || IGNORE.some((p) => name.split("/")[0] === p || name.includes("/.git/"));
}

async function sync() {
  if (busy) { again = true; return; }
  busy = true;
  try {
    await run("git", ["add", "-A"], { cwd: ROOT });
    const { stdout: status } = await run("git", ["status", "--porcelain"], { cwd: ROOT });
    if (!status.trim()) { busy = false; return; }
    const stamp = new Date().toISOString().replace("T", " ").slice(0, 19);
    await run("git", ["-c", "user.email=kasper@local", "-c", "user.name=Kasper Studio",
      "commit", "-q", "-m", `auto: sync ${stamp}`], { cwd: ROOT });
    await run("git", ["push", "-q", "origin", "main"], { cwd: ROOT });
    console.log(`[${stamp}] ✅ poussé — le site se met à jour dans ~1 min`);
  } catch (e) {
    console.error("⚠️  sync error:", e.stderr || e.message);
  } finally {
    busy = false;
    if (again) { again = false; schedule(); }
  }
}

function schedule() {
  clearTimeout(timer);
  timer = setTimeout(sync, 2500);
}

console.log("👀 Auto-sync actif. Modifie tes fichiers, je pousse tout seul. (Ctrl+C pour arrêter)");
console.log("   Live : https://jfeosjfosi.github.io/kasper-plateforme/");
watch(ROOT, { recursive: true }, (_evt, name) => {
  if (ignored(name)) return;
  schedule();
});
