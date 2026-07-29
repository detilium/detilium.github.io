---
title: "Unreal Engine Online Foundation"
summary: "A modular Unreal Engine project showcasing provider-agnostic authentication (Steam + EOS Connect, EGS), session orchestration, and dedicated-server flows."
category: "labs"
tags:
  - Unreal Engine
  - C++
  - Multiplayer
  - Networking
  - Online Services
  - Online Subsystem
  - EOS
  - Steam
  - Dedicated Server
repo: "https://github.com/detilium/<your-repo>"
#demo: "https://<optional-demo-link>"
#thumbnail: ""
#cover: "/images/projects/unreal-online-foundation/cover.png"
draft: true
---

## What this showcases

This is a **systems-focused Unreal Engine online showcase**: a modular playground that demonstrates how I design and implement the _foundational online layer_ behind multiplayer games.

It’s intentionally not a “game demo”. The purpose is to show **architecture, integration, and lifecycle correctness** across authentication, identity, sessions, dedicated servers, discovery, and client travel—while keeping the codebase provider-agnostic.

## Showcase highlights

### Provider-agnostic authentication

I implemented a clean abstraction boundary so the project can switch authentication providers without rewriting game code.

Demonstrated flows:

- **Steam → EOS Connect** (platform ticket to EOS identity)
- **Epic Games Store (EGS)** login path
- Unified “login completed” event surface for other systems to consume (no hidden coupling)

### Dedicated server registration & discovery

I built the dedicated server flow end-to-end:

- Server **boots and registers itself** (session create/register)
- Clients can **search sessions** and select a target server
- Client performs **join + travel** to the dedicated server

This is the practical backbone behind “server browser” style flows and is a stepping-stone to orchestration/matchmaking.

### Session orchestration mindset

Rather than hardcoding everything into one place, I’m shaping the code toward **strategy-driven join flows** (so you can later swap in a custom backend orchestrator without tearing up the project).

### Debuggability-first implementation

Online features are hard to debug. This showcase emphasizes:

- Clear log categories per subsystem
- High-signal lifecycle logs (login/session/travel)
- Config-driven selection (e.g. `DefaultGame.ini`) to reproduce issues quickly

## What you can learn from this project about my approach

- I design systems with **clear boundaries** (platform auth vs EOS identity vs “game-facing API”)
- I’m comfortable integrating Unreal’s online stack and dealing with real-world provider constraints
- I structure code like a production codebase: modular, maintainable, and testable where possible
- I prioritize developer experience: readable architecture + logging that supports iteration

## Capabilities demonstrated

- Unreal Engine C++ modules + subsystem architecture
- Provider integration (Steam, EOS Connect, EGS)
- Dedicated server session registration
- Session search + join flow
- Client-to-server travel
- Replication baseline to validate authority/connectivity

## Next steps (if this were to become a real product foundation)

- Add a small backend orchestrator layer (matchmaking/raid-style flows)
- Expand identity mapping (Platform ID ↔ EOS PUID ↔ Backend token)
- Presence/friends/invite flows as an end-to-end feature
- Hardening: retries, timeouts, failure modes, telemetry, automated smoke tests

## Tech

- Unreal Engine (C++)
- EOS (Connect / Sessions)
- Steam auth ticket → EOS Connect
- Online Subsystem / Online Services (abstracted)
