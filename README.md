# 🪐 Space Tasks

A browser-based to-do list with a live animated snake background, task persistence, and a built-in dark theme.

## Overview

`Space Tasks` is a small standalone side project built with plain HTML, CSS, and JavaScript. It combines a moving snake animation with a small checklist app. No backend or account is required.

## Features

- Snake animation rendered with pure CSS
- Add, complete, and delete tasks
- Local task persistence via `localStorage`
- Theme toggle: light and dark
- Simple, keyboard-friendly task input

## Project Structure

- `index.html` — app structure and markup
- `style.css` — layout, snake animation, checklist styling, and theme rules
- `app.js` — task logic, save/load, and theme state
- `README.md` — project documentation

## Usage

Open `index.html` in a browser.

## Storing Tasks

- Tasks are saved automatically under the `tasks` key in `localStorage`
- Theme preference is saved under the `theme` key
- Clearing browser data will reset state

## Notes

- Built for exploration and practice
- Focus is on visual behavior and simple local persistence
