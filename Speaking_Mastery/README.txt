MIFTAH ARABIC — SPEAKING MASTERY STUDIO
One interactive speaking page per lesson, plus a hub page (index.html).

WHAT IS IN THIS FOLDER
  index.html        The hub: every unit and lesson, with each student's progress
  topic-a/          AT-A-L01 … AT-A-L12   (from the Topic A Speaking Workshops)
  d1/               D1-L01 … D1-L12        (D1-L12 = unit speaking mock)
  */audio/<CODE>/   Optional teacher recordings (see below)

EACH LESSON PAGE HAS FIVE STATIONS
  1 Key language   hear · say · record · compare (with he/she/they, m./f./pl. forms)
  2 Role plays     exam-style cards A–D, the unexpected “!” task, help frames,
                   “Run as exam” mode with timers
  3 Conversation   Core / Develop / Stretch questions, think + speak timers,
                   model answers with a Range spotter
  4 Mock exam      timed, recorded, self-assessed out of 12, downloadable recording
  5 My progress    badges, “practise next” list, mock scores

UPLOADING TO HOSTINGER (same as the café activity)
  1. hPanel › Files › File Manager › public_html
  2. Create a folder called  speaking
  3. Upload the whole contents of this folder into it (keep the sub-folders)
  4. Visit  https://miftaharabiclessons.inkandpixels.uk/speaking/
  5. Link to it from your #mastery section, e.g. one card per unit:
       /speaking/                (hub)
       /speaking/topic-a/at-a-l05.html   (a single lesson)

GOOD TO KNOW
  • The pages must be opened over https (your website) for the microphone to work.
  • Voices: the studio uses the device’s Arabic voice. Microsoft Edge has the most
    natural ones; on iPad/Windows an Arabic voice may need installing (the page explains how).
  • Progress is saved in each student’s own browser on that device — nothing is uploaded.
  • Pronunciation check (beta) works in Chrome and Edge only.

ADDING YOUR OWN RECORDINGS (optional — replaces the device voice)
  Each lesson’s audio folder has an ids.txt listing every line. Record a line as
  <id>.mp3 (use _ instead of :, e.g. rpm_AT-A-L05-rpA-1.mp3), put it in that folder
  and rebuild with:  node generator/speaking/build.js

REBUILDING
  cd generator && node speaking/build.js
  Topic A content is extracted from the Speaking Workshop decks with
  python3 speaking/extract_topic_a.py; D1/D2 content lives in
  generator/site-data/speaking/d1/ and d2/ (one JSON file per lesson).
