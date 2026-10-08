# Proteomics Dry-Lab Onboarding

Welcome to the Proteomics Group dry-lab onboarding handbook. This repository helps new members learn the computational side of proteomics: NIH HPC/Biowulf, database searching, R, QC, and downstream analysis.

> **Scope:** This handbook is for dry-lab analysis only. It does not cover sample preparation or instrument operation. Raw mass-spectrometry files remain on approved NIH/Biowulf or group storage and are not uploaded to GitHub.

## Start here: follow this order

| Step | Module | What you will do |
|---:|---|---|
| 1 | [NIH HPC and Biowulf](rmarkdown/biowulf.Rmd) | Request an account, learn login/storage basics, and submit a first SLURM job. |
| 2 | [Learn R for Proteomics](rmarkdown/learn-r.Rmd) | Build R, data-wrangling, visualization, and biomedical-analysis skills. |
| 3 | [Learn Proteomics](rmarkdown/learn-proteomics.Rmd) | Understand DIA, DDA, peptides, protein groups, FDR, and QC. |
| 4 | [Database Search](rmarkdown/database-search.Rmd) | Prepare raw files, metadata, FASTA files, and search settings. |
| 5A | [Spectronaut DirectDIA](rmarkdown/spectronaut-directdia.Rmd) | Run the library-free Spectronaut workflow step by step. |
| 5B | [DIA-NN](rmarkdown/database-search.Rmd#dia-nn) | Run or learn the DIA-NN library-free workflow. |
| 6 | [ProtPipe](rmarkdown/protpipe.Rmd) | Perform downstream QC, normalization, statistical analysis, and visualizations. |
| 7 | [Example Dataset](rmarkdown/example-dataset.Rmd) | Practice the complete workflow and compare with expected results. |
| 8 | [Troubleshooting](rmarkdown/troubleshooting.Rmd) | Save the right information and diagnose common problems. |

## Page outline

```text
Proteomics Dry-Lab Onboarding
├── Start here
│   └── First-week dry-lab path
├── 1. NIH HPC / Biowulf
│   ├── Account request and login
│   ├── File systems and data movement
│   └── SLURM jobs
├── 2. Learn R for proteomics
│   ├── Beginner R resources
│   ├── Biomedical data analysis
│   └── R Markdown reports
├── 3. Learn proteomics
│   ├── Proteomics basics
│   ├── DDA versus DIA
│   └── Raw files → peptides → proteins
├── 4. Database search
│   ├── Inputs, FASTA, and metadata
│   ├── DIA-NN
│   └── Spectronaut DirectDIA
├── 5. ProtPipe
│   ├── Input and configuration
│   ├── Run on Biowulf
│   └── QC and output review
├── 6. Example dataset
└── 7. Troubleshooting
```

## Shared analysis resources

- [Universal Contaminants FASTA — 381 entries](resources/fasta/Universal_Contaminants_381.fasta)
- [Contaminants FASTA citation and integrity information](resources/fasta/README.md)
- [NIH HPC account instructions](https://hpc.nih.gov/docs/accounts.html)

## Edit the handbook and publish GitHub Pages

1. Edit the appropriate `.Rmd` page in [`rmarkdown/`](rmarkdown/).
2. In RStudio, run `rmarkdown::render_site("rmarkdown")` from the repository root.
3. Commit the updated source files and the generated `docs/` HTML files.
4. In GitHub repository settings, enable **Pages** from the `main` branch and `/docs` folder.

Once GitHub Pages is enabled, this README can also link to the rendered website. Until then, the module links above open the editable R Markdown source directly in GitHub.
