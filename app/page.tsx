"use client";

import { useState } from "react";

const sections = [
  { id: "start", label: "Start here" },
  { id: "learn", label: "1. Learn proteomics" },
  { id: "biowulf", label: "2. Biowulf" },
  { id: "search", label: "3. Database search" },
  { id: "protpipe", label: "4. ProtPipe" },
  { id: "dataset", label: "5. Example dataset" },
  { id: "help", label: "6. Troubleshooting" },
];

function CodeBlock({ children }: { children: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="code-block">
      <button
        className="copy-button"
        onClick={() => {
          navigator.clipboard.writeText(children);
          setCopied(true);
          window.setTimeout(() => setCopied(false), 1800);
        }}
      >
        {copied ? "Copied" : "Copy"}
      </button>
      <pre><code>{children}</code></pre>
    </div>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return <aside className="callout"><span>TIP</span>{children}</aside>;
}

export default function Home() {
  const [active, setActive] = useState("start");
  return (
    <main>
      <header className="site-header">
        <a href="#start" className="wordmark" onClick={() => setActive("start")}>
          <span className="wordmark-mark">P</span>
          <span>Proteomics<br /><em>Group</em></span>
        </a>
        <span className="header-note">Onboarding guide</span>
      </header>

      <div className="page-shell">
        <aside className="sidebar" aria-label="Guide navigation">
          <p className="sidebar-kicker">Your guide</p>
          <nav>
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={active === section.id ? "active" : ""}
                onClick={() => setActive(section.id)}
              >{section.label}</a>
            ))}
          </nav>
          <div className="sidebar-footer">
            <span className="status-dot" /> Living resource<br />Last updated: October 2026
          </div>
        </aside>

        <article className="content">
          <section id="start" className="hero">
            <p className="eyebrow">WELCOME TO THE LAB</p>
            <h1>Find your footing in<br /><i>proteomics.</i></h1>
            <p className="lead">A practical path from core concepts to running your first analysis on Biowulf.</p>
            <div className="journey" aria-label="Onboarding path">
              <span>Learn</span><b>→</b><span>Run</span><b>→</b><span>Inspect</span><b>→</b><span>Apply</span>
            </div>
          </section>

          <section className="first-week">
            <div><p className="eyebrow">A FIRST-WEEK PATH</p><h2>Build confidence by doing.</h2></div>
            <ol className="week-list">
              <li><strong>Day 1</strong><span>Get access, explore the glossary, and learn the DIA workflow.</span></li>
              <li><strong>Day 2</strong><span>Log into Biowulf and submit a small practice job.</span></li>
              <li><strong>Day 3</strong><span>Search the example raw files with DIA-NN or Spectronaut.</span></li>
              <li><strong>Day 4</strong><span>Review results and run the ProtPipe example.</span></li>
            </ol>
          </section>

          <section id="learn">
            <p className="eyebrow">01 / FOUNDATION</p>
            <h2>Learn proteomics</h2>
            <p>Start with the vocabulary and mental model that make later workflow decisions easier to understand.</p>
            <div className="card-grid">
              <div className="card"><b>Proteomics basics</b><p>Proteins, peptides, MS/MS, identification, and quantification.</p><a href="#glossary">Open glossary →</a></div>
              <div className="card"><b>DDA vs DIA</b><p>How acquisition choices shape identification depth and reproducibility.</p><a href="#search">Compare workflows →</a></div>
              <div className="card"><b>Raw files → results</b><p>Follow the path from instrument files to quantified protein tables.</p><a href="#dataset">See the example →</a></div>
            </div>
            <div className="concept-strip">
              <div><span>01</span><b>Raw files</b><small>Instrument output</small></div>
              <div><span>02</span><b>Peptides</b><small>Identified signals</small></div>
              <div><span>03</span><b>Proteins</b><small>Grouped evidence</small></div>
              <div><span>04</span><b>Biology</b><small>Interpretable result</small></div>
            </div>
          </section>

          <section id="biowulf">
            <p className="eyebrow">02 / COMPUTE</p>
            <h2>Work on Biowulf</h2>
            <p>Biowulf is the group&apos;s high-performance computing environment. Use it for large-scale searches and repeatable analyses.</p>
            <div className="two-col">
              <div>
                <h3>Before your first run</h3>
                <ul className="check-list"><li>Request a Biowulf account and group access.</li><li>Set up SSH and multi-factor authentication.</li><li>Confirm your project and data directories.</li><li>Learn the difference between interactive and batch jobs.</li></ul>
              </div>
              <div className="soft-panel"><p className="panel-label">ESSENTIAL CONCEPTS</p><dl><dt>Login node</dt><dd>Prepare files; do not run intensive analyses here.</dd><dt>SLURM job</dt><dd>A request for compute resources and a reproducible command.</dd><dt>Scratch space</dt><dd>Fast temporary storage for active analysis work.</dd></dl></div>
            </div>
            <h3>Minimal SLURM job template</h3>
            <CodeBlock>{`#!/bin/bash
#SBATCH --job-name=proteomics-test
#SBATCH --cpus-per-task=8
#SBATCH --mem=32g
#SBATCH --time=04:00:00
#SBATCH --output=logs/%x-%j.out

module load <your-software-module>
<your-analysis-command>`}</CodeBlock>
            <Callout>Replace the placeholders with your lab&apos;s approved module and paths. Check the output log after every job.</Callout>
          </section>

          <section id="search">
            <p className="eyebrow">03 / DATABASE SEARCH</p>
            <h2>Turn spectra into identifications</h2>
            <p>Choose the workflow that matches the experiment and group standard. Both begin with organized raw files, a documented FASTA database, and sample metadata.</p>
            <div className="workflow-grid">
              <div className="workflow-card accent-card"><p className="panel-label">SPECTRONAUT</p><h3>Targeted DIA analysis</h3><ul><li><b>Input:</b> raw files, FASTA and/or spectral library</li><li><b>Review:</b> search settings, FDR, protein inference</li><li><b>Deliver:</b> reports and QC exports</li></ul><a href="#spectronaut">Spectronaut checklist →</a></div>
              <div className="workflow-card"><p className="panel-label">DIA-NN</p><h3>Library-free DIA search</h3><ul><li><b>Input:</b> raw files and FASTA</li><li><b>Review:</b> precursor/protein FDR and quantification</li><li><b>Deliver:</b> report.tsv and QC outputs</li></ul><a href="#diann">DIA-NN checklist →</a></div>
            </div>
            <div id="spectronaut" className="detail-panel"><h3>Spectronaut checklist</h3><ol><li>Confirm raw-file names match your sample sheet.</li><li>Use the lab-approved FASTA and record its version.</li><li>Start from the validated group settings template.</li><li>Run a small subset first, then inspect identification and QC summaries.</li></ol><p><b>Add your group&apos;s Spectronaut command or submission instructions here.</b> The final version should name the approved software version, module/container, database path, and output folder.</p></div>
            <div id="diann" className="detail-panel"><h3>DIA-NN checklist</h3><ol><li>Use library-free mode only with the documented FASTA and settings.</li><li>Specify the correct mass tolerances and enzyme for the experiment.</li><li>Set precursor and protein FDR according to the group standard.</li><li>Check the report and quality-control output before downstream analysis.</li></ol><CodeBlock>{`diann --fasta <approved_database.fasta> \\
  --f <raw_file_1> --f <raw_file_2> \\
  --out <output_directory>/report.tsv \\
  <lab-approved-parameters>`}</CodeBlock></div>
          </section>

          <section id="protpipe">
            <p className="eyebrow">04 / DOWNSTREAM ANALYSIS</p>
            <h2>Use ProtPipe</h2>
            <p>ProtPipe organizes downstream analysis into a consistent, documented process. Use the group configuration as your starting point rather than creating one from scratch.</p>
            <div className="steps">
              <div><b>1</b><h3>Prepare input</h3><p>Validated search output, metadata, and comparison plan.</p></div>
              <div><b>2</b><h3>Configure</h3><p>Copy the example config; update paths and sample annotations.</p></div>
              <div><b>3</b><h3>Run</h3><p>Submit the group script on Biowulf.</p></div>
              <div><b>4</b><h3>Review</h3><p>Inspect QC, normalized tables, and analysis reports.</p></div>
            </div>
            <Callout>Keep the config file with your results. It is the record of how an analysis was produced.</Callout>
          </section>

          <section id="dataset">
            <p className="eyebrow">05 / PRACTICE</p>
            <h2>Example dataset</h2>
            <p>This protected practice set lets everyone follow the same workflow and compare outputs.</p>
            <div className="dataset-table"><div><b>Raw files</b><span>Provided by the group</span></div><div><b>FASTA database</b><span>Lab-approved reference version</span></div><div><b>Expected results</b><span>QC summary + search output</span></div><div><b>Where to find it</b><span>Add group storage path and access note</span></div></div>
            <Callout>Do not place raw instrument files in GitHub. Link this guide to the approved shared-storage or Biowulf location.</Callout>
          </section>

          <section id="help">
            <p className="eyebrow">06 / SUPPORT</p>
            <h2>Troubleshooting</h2>
            <div className="trouble-grid"><div><h3>Before asking for help</h3><p>Save the command, job ID, log file, software version, and exact error message.</p></div><div><h3>Common places to check</h3><p>File paths, disk space, FASTA version, module version, sample-sheet names, and SLURM resource requests.</p></div></div>
            <div id="glossary" className="glossary"><h3>Quick glossary</h3><p><b>DIA</b> — data-independent acquisition. <b>DDA</b> — data-dependent acquisition. <b>FASTA</b> — protein-sequence database. <b>FDR</b> — estimated false discovery rate. <b>QC</b> — quality control.</p></div>
          </section>
        </article>
      </div>
    </main>
  );
}
