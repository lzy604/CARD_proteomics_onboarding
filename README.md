# Proteomics Dry-Lab Onboarding

This repository contains the group handbook for **dry-lab proteomics onboarding**: R, NIH HPC/Biowulf, database searching, Spectronaut DirectDIA, DIA-NN, ProtPipe, and reproducible analysis.

## Repository structure

- `rmarkdown/` — editable handbook pages (`.Rmd` files)
- `resources/fasta/` — approved shared FASTA resources, including the 381-entry Universal Contaminants FASTA
- `docs/` — rendered HTML website for GitHub Pages (created after rendering)

## Edit and publish

1. Open the `rmarkdown/` folder in RStudio.
2. Edit the appropriate `.Rmd` page.
3. Run `rmarkdown::render_site("rmarkdown")` from the repository root.
4. Commit both the edited source files and the generated `docs/` HTML files.
5. In GitHub, enable **Pages** from the `main` branch and `/docs` folder.

Raw mass-spectrometry files must remain on approved NIH/Biowulf or group storage; link to them from the handbook rather than uploading them to GitHub.
