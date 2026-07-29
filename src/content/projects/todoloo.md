---
title: "Todoloo"
summary: "A Blizzard-styled in-game task manager and tracker for daily/weekly routines, with character-specific tasks, custom groups, and flexible reset rules."
category: "indie"
tags:
  - "Lua"
  - "World of Warcraft"
  - "Addon Development"
  - "UI"
  - "Event-driven"
repo: "https://github.com/Todoloo-WoW/Todoloo"
demo: "https://www.curseforge.com/wow/addons/todoloo"
thumbnail: "/images/projects/todoloo/todoloo_thumbnail.jpg"
cover: "/images/projects/todoloo/todoloo_cover.jpg"
draft: false
---

## Overview

**Todoloo** is a friendly in-game task management assistant for World of Warcraft.  
It helps you track recurring routines (mount runs, transmog runs, professions, etc.) using a **Blizzard-styled** task manager and task tracker.

## Key features

- Create **character-specific tasks** that reset **daily**, **weekly**, or **manually**
- Organize tasks into **custom groups**
- Blizzard-styled **task manager** to create, edit, delete, and reorder groups/tasks
- Task tracker can be:
  - a **floating tracker**, or
  - **attached to the Objective Tracker**
- Optional: **hide completed** tasks and groups in the tracker

## How it works (UX)

### Task Tracker

- `Shift` + `Left-Click` toggles task completion
- Toggle between floating tracker and objective-tracker mode
- Drag the floating tracker to position it

### Task Manager

- Open via the minimap icon
- Includes an in-game help guide
- Filter characters via the **Filter** button
- Group & task management via context menus and drag/drop reordering

### Addon Settings

- Open via in-game settings or `Right-Click` o nthe minimap icon
- Utilizes the World of Warcraft Settings API
- Options to auto-hide the task tracker in combat and control visibility of completed items

## Commands

Commands start with `/tdl` or `/todoloo`:

- `tm`, `task-manager` — open the task manager
- `tt`, `task-tracker` — toggle the floating task tracker
- `s`, `settings` — open settings

## What this project showcases

- Shipping a user-facing tool with real constraints (WoW addon environment)
- Clean, event-driven UI behavior and state handling
- Product-style delivery: documentation, iteration, and feedback loop via issues

## Links

- Repo: https://github.com/Todoloo-WoW/Todoloo
- CurseForge: https://www.curseforge.com/wow/addons/todoloo
