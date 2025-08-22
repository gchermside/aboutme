# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Genevieve Chermside showcasing coding projects. The site is a static HTML/CSS/JavaScript website hosted on GitHub Pages at `gchermside.github.io/aboutme/`.

## Architecture

- **Static Website**: Pure HTML/CSS/JavaScript with no build process or package management
- **File Structure**: 
  - `docs/` - Contains all website files (GitHub Pages serves from this directory)
  - `docs/index.html` - Main page with project showcase
  - `docs/style.css` - All styling including gradient background and collapsible project sections
  - `docs/script.js` - Interactive functionality for expandable project cards
  - `docs/img/` - Image assets (clickMe.png, compSci.png, curvedLine.png)

## Key Features

- **Collapsible Project Cards**: JavaScript handles toggle functionality for project descriptions
- **Responsive Layout**: CSS flexbox layout with left/right alternating project alignment
- **Canvas Element**: Placeholder for animations (currently unused after bubble animation removal)
- **External Links**: Projects link to live demos on various platforms (asldictionary.org, ant-war.com, replit.com, etc.)

## Development

- No build tools, package managers, or dependencies
- Direct file editing for all changes
- Testing done by opening `docs/index.html` in browser
- Deployment via GitHub Pages from `docs/` directory

## Recent Changes

Based on git history, recent work included removing bubble animations and letters from the homepage, suggesting the site originally had more interactive canvas-based animations that were simplified.