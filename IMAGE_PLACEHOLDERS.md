# Image placeholders — collection checklist

Every image placeholder on the site now shows a red **shot number** in its top-left corner
(e.g. `CB1-01`). Use that number when handing files back, naming files, or discussing a shot,
so there is never any doubt which slot an image belongs in.

**File naming:** `CB1-01.jpg`, `HOME-03.jpg`, … one file per number.

**Videos.** Every machine page now carries a single hero video instead of a cluster of
stills. Those slots are numbered `<PAGE>-VIDEO` and are listed in their own table below.
Deliver them as MP4 (H.264, 16:9, **no audio track**) — the player is always muted, and
autoplays, loops, and offers pause, scrubbing and full screen.

**32 stills + 12 videos.** Numbers are namespaced per page, so adding a shot to one page never
renumbers another.

| Prefix | Page | Shots |
|---|---|---|
| `HOME-` | Homepage (`#home`) | 5 |
| `MACH-` | Machinery index (`#machinery`) | 3 |
| `SWAB-` | Cotton swab machinery (`#cotton-swab-machinery`) | 4 |
| `PAD-` | Cotton pad machinery (`#cotton-pad-machinery`) | 3 |
| `PACK-` | Packaging machines (`#packing`) | 6 |
| `CB1-` | CB1 4.1 product page (`#cb1`) | 8 stills + 2 videos |
| `PRX-` | PRX product page (`#prx`) | 1 video |
| `ABOUT-` | About (`#about`) | 2 |
| `CAREERS-` | Careers (`#careers`) | 1 |
| per machine | 9 machine detail pages | 1 video each |

---

## Homepage — `#home`

| ID | Shot | Format |
|---|---|---|
| `HOME-01` | CB1 line, Rüti production floor wide shot | Full-bleed hero, very wide landscape (620 px tall) |
| `HOME-02` | CB1 4.1, front 3/4 product shot | Portrait 4:5 |
| `HOME-03` | Cotton swab production line | Landscape 4:3 |
| `HOME-04` | Cotton pad production line | Landscape 4:3 |
| `HOME-05` | PRX paper stick production machine | Landscape 4:3 |

## Machinery index — `#machinery`

| ID | Shot | Format |
|---|---|---|
| `MACH-01` | Cotton swab production line, CB1 4.1 | Landscape 4:3 |
| `MACH-02` | Cotton pad production line, WR-2100 + VP | Landscape 4:3 |
| `MACH-03` | Paper stick production machine, PRX | Landscape 4:3 |

## Cotton swab machinery — `#cotton-swab-machinery`

| ID | Shot | Format |
|---|---|---|
| `SWAB-01` | PRX paper stick winder, full unit | Landscape, fills half the block |
| `SWAB-02` | CB1 4.1 cotton swab production machine | Landscape, fills half the block |
| `SWAB-03` | Packaging line, multiple format options | Landscape, fills half the block |
| `SWAB-04` | Complete CB1 production line, **video walkthrough** | Video 16:9 |

## Cotton pad machinery — `#cotton-pad-machinery`

| ID | Shot | Format |
|---|---|---|
| `PAD-01` | WR-2100 cotton pad production machine | Landscape, fills half the block |
| `PAD-02` | RB-2 cotton pad polybag packaging machine | Landscape, fills half the block |
| `PAD-03` | Complete WR-2100 S + RB-2 pad line, **video walkthrough** | Video 16:9 |

## Packaging machines — `#packing`

| ID | Shot | Format |
|---|---|---|
| `PACK-01` | SV-2X cardboard box packaging machine | Landscape 16:9 |
| `PACK-02` | ABS-2 polybag packaging machine | Landscape 16:9 |
| `PACK-03` | RB-30A round box packaging machine | Landscape 16:9 |
| `PACK-04` | SQB-2A square box packaging machine | Landscape 16:9 |
| `PACK-05` | BL-12 blister packaging machine | Landscape 16:9 |
| `PACK-06` | Round table semi-automatic packaging | Landscape 16:9 |

## CB1 4.1 — `#cb1`

| ID | Shot | Format |
|---|---|---|
| `CB1-05` | Standard cotton swabs | Portrait 3:4 |
| `CB1-06` | Baby / safety swabs | Portrait 3:4 |
| `CB1-07` | Cosmetic swabs | Portrait 3:4 |
| `CB1-08` | Medical swabs | Portrait 3:4 |
| `CB1-09` | Hot melt unit + glue applicator head | Landscape 16:9 |
| `CB1-10` | Camera inspection module + HMI image review | Landscape 16:9 |
| `CB1-11` | Belt drive carrier on dry-running primary belt | Landscape 16:9 |
| `CB1-12` | Extraction nozzle at cotton feeder + airflow housing | Landscape 16:9 |

The two CB1 videos are in the video table below. `CB1-01` to `CB1-04` were the old hero
stills and are retired, do not shoot them.

## PRX — `#prx`

No stills. The PRX hero is a video, see the video table below.

## Machine hero videos

One per machine page. MP4, H.264, 16:9, no audio track. Drop the file in
`public/assets/video/` and point the page at it (`heroVideo` in `machines-data.jsx` for the
nine detail pages, the `src` prop on `MachineHeroVideo` for CB1 and PRX).

| ID | Clip | Page |
|---|---|---|
| `CB1-VIDEO` | CB1 4.1 cotton swab machine running | `#cb1` |
| `CB1-LINE-VIDEO` | Complete CB1 production line walkthrough | `#cb1` |
| `PRX-VIDEO` | PRX paper stick machine running | `#prx` |
| `RB2-VIDEO` | RB-2 running | `#rb2` |
| `SV2X-VIDEO` | SV-2X running | `#sv2x` |
| `RB30A-VIDEO` | RB-30A running | `#rb30a` |
| `POLYBAG-VIDEO` | ABS-2 running | `#polybag` |
| `SQB2A-VIDEO` | SQB-2A running | `#sqb2a` |
| `BL12-VIDEO` | BL-12 running | `#bl12` |
| `WR600-VIDEO` | WR-600 V running | `#wr600` |
| `WR2100-VIDEO` | WR-2100 S running | `#wr2100` |
| `VP2-VIDEO` | VP-2 running | `#vp2` |

## About — `#about`

| ID | Shot | Format |
|---|---|---|
| `ABOUT-01` | FALU engineering team / archive photograph | Landscape 4:3 |
| `ABOUT-02` | FALU factory, Rüti, Switzerland, exterior | Landscape 4:3 |

## Careers — `#careers`

| ID | Shot | Format |
|---|---|---|
| `CAREERS-01` | FALU team at work in Rüti | Landscape 4:3 |

## Machine detail pages

All nine machine pages are now a single hero video and no stills. See the video table above.

---

## For developers

The number comes from the `id` prop on `ImageSlot` (`components/shared.jsx`). When adding a
placeholder, give it the next free number for that page's prefix and add a row above. Machine
detail numbers are generated from the page id, so a new machine in `machines-data.jsx` is
numbered automatically.

A placeholder with no `id` falls back to the old `IMG · placeholder` caption, which is the
signal that it still needs a number.

Video slots come from `MachineHeroVideo` (same file). Without a `src` it renders a labelled
placeholder; with one it plays the file, muted and looping, with the FALU control bar.

`components/HomepageA.jsx` is an unused alternative homepage layout (not reachable through the
router), so its three placeholders are deliberately left unnumbered.
