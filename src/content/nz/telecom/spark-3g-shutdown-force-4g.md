---
title: 'Spark 3G Shutdown 2026: How to Force Your Rural Modem to 4G'
description: 'Spark is shutting down its older 3G network. If your rural broadband modem keeps dropping back to a slow 3G signal, you will soon have zero internet. Learn how to log into your modem and force a permanent 4G LTE connection.'
category: 'Telecom'
lastUpdated: 2026-03-05
country: 'nz'
author: 'ErrorDocs Tech Team'
image: '/images/spark-3g-shutdown-force-4g.png'
tags: ['Spark', '3G Shutdown', 'Rural Broadband', '4G LTE', 'NZ Tech', 'Huawei']
instantAnswer: 'To ensure your internet survives the 2026 3G shutdown, you must force your modem to use 4G only. Log in to your Spark Huawei modem at 192.168.1.254 (admin/admin). Go to Settings > Dial-up > Network Settings. Change the "Preferred Mode" dropdown from Auto to "4G Only" (or LTE Only). Click Apply. This stops the modem from searching for the dying 3G towers.'
faqs:
  - question: 'When exactly is Spark shutting down 3G in NZ?'
    answer: 'Spark currently plans to complete the shutdown of its 3G network in March 2026. After this date, any device (phone or modem) that relies on 3G will permanently lose its connection to the Spark network.'
  - question: 'Why does my modem drop to 3G if I pay for 4G?'
    answer: 'By default, all modems are set to "Auto" mode. If the 4G signal from the cell tower weakens due to rain, trees, or tower congestion, the modem will automatically fallback to the stronger, but vastly slower, 3G signal to maintain a connection. Forcing "4G Only" prevents this fallback.'
  - question: 'Will my old Spark modem even work after the shutdown?'
    answer: 'If you have a very old Huawei B315 or B618, they do support 4G LTE and will continue to work. However, if your modem is older than 2017 and only supports 3G, it will become a paperweight. Call Spark for a free hardware upgrade.'
  - question: 'What if I lose connection completely when I select 4G Only?'
    answer: 'If selecting "4G Only" results in a red LOS or disconnected light, you live in an area that does not currently have Spark 4G coverage. You have been relying entirely on the 3G network. You must investigate installing an external 4G antenna on your roof, or switch to a satellite provider like Starlink before the March 2026 shutdown.'
---

# Spark 3G Shutdown 2026: How to Force Your Rural Modem to 4G

<div class='instant-fix-box'>
  <p>To prevent your internet from dying during the 2026 3G shutdown, log into your Spark or Skinny 4G modem at <strong>192.168.1.254</strong>. Navigate to <strong>Settings</strong> > <strong>Dial-up</strong> > <strong>Network Settings</strong>. Change the Network Search mode from Auto to <strong>4G Only</strong> (or LTE Only). Click Apply. This guarantees your modem will never drop back to the defunct 3G network.</p>
</div>

<AdSenseBlock slot='article-top' />

## The End of 3G in New Zealand

If you live in a rural part of New Zealand, you have likely seen it happen: the light on your white Spark or Skinny modem suddenly changes color. Your YouTube video buffers, web pages take thirty seconds to load, and your Zoom call freezes.

When you look at the modem administration page, it says you are connected to **3G**, even though you pay for a **4G Wireless Broadband** plan.

For years, this fallback mechanism was annoying but necessary. 3G was the safety net. But in **March 2026**, that safety net is being permanently removed. Spark (along with One NZ and 2degrees) is shutting off the 3G spectrum completely. They are re-allocating those radio frequencies to boost their newer 4G and 5G networks.

If your modem is still relying on 3G fallback, you are going to wake up one morning with a red light and zero internet. 

Here is exactly why modems drop to 3G, and how to force them to stay on 4G permanently.

## Why Your Modem Betrays You (The Auto Fallback Flaw)

Almost every cellular modem supplied in New Zealand—from the older Huawei B315 to the newer ZTE models—ships with its Network Search setting set to **Auto**.

"Auto" means the modem is constantly scanning the horizon, looking for the strongest possible radio signal, regardless of how fast that signal is.

**The Physics Problem:**
4G (LTE) operates on higher frequencies than 3G. While 4G carries much more data (giving you fast speeds), its higher frequency waves cannot punch through obstacles very well. They get blocked by heavy rain, thick native bush, and hills. 

3G operates on a lower frequency. It can easily punch through rain and trees, but it carries very little data.

When a storm rolls into your rural valley, the 4G signal drops. Your modem's "Auto" software panics. It sees that the 4G signal is weak (say, 1 bar), but it sees a massive, strong 3G signal (5 bars) from a tower on the other side of the hill. The modem immediately drops the 4G connection and latches onto the 3G tower to ensure you don't disconnect.

**The result:** You have 5 bars of signal, but a useless 2Mbps download speed. 

Worse still, even after the storm passes and the 4G signal returns, the modem is "lazy." It often will not bother switching back to 4G until you manually reboot it.

## The Solution: Forcing "4G Only" Mode

To ensure your internet stays fast and survives the 2026 shutdown, you must tell the modem to completely ignore the 3G network. You want a weak 4G signal, rather than a strong 3G signal.

### Step-by-Step for Huawei Modems (B315, B618, B818)

These are the most common modems supplied by Spark and Skinny over the last decade.

1.  Connect your computer, iPad, or phone to your Spark/Skinny Wi-Fi network.
2.  Open a web browser (Chrome, Safari, Edge).
3.  Type **192.168.1.254** (or **192.168.8.1** on some variants) into the address bar.
4.  Log in. The default username is usually `admin` and the password is `admin`, or the unique password printed on the sticker underneath the modem.
5.  On the main dashboard, click on **Settings** in the top navigation bar.
6.  Look at the left-hand menu. Expand the **Dial-up** section.
7.  Click on **Network Settings**.
8.  Look for the **Preferred Mode** or **Network Search Mode** dropdown box. It will currently be set to "Auto".
9.  Click the dropdown and change it to **4G Only** (some firmware versions label this **LTE Only**).
10. Click the **Apply** or **Save** button.

The modem will briefly disconnect from the cell tower. The signal light will blink. When it reconnects, it will *only* establish a 4G connection. 

### Step-by-Step for ZTE / Newer Modems

If you have received a new modem in the last two years, the interface will look slightly different.

1.  Log in at **192.168.1.254** (or `192.168.0.1`).
2.  Navigate to **Network** or **Internet Settings**.
3.  Click on **Mobile Network** or **Cellular Settings**.
4.  Find the **Network Selection** or **Mode** option.
5.  Change it from "Auto" to **4G Network Only**.
6.  Click Apply.

<AdSenseBlock slot='article-middle' />

## The "Red Light" Warning: What If You Lose Internet?

When you force the modem to "4G Only" and click Apply, one of two things will happen.

**Scenario A (Success):** The light turns blue or cyan. Even if you only have 1 or 2 bars of signal, run a speed test. You will likely find your speeds are incredibly fast (30Mbps+) despite the low bar count. You are now future-proofed against the 2026 shutdown.

**Scenario B (Failure):** The signal light turns red, and you completely lose internet access.

If Scenario B happens, it means your house is in a **4G Blackspot**. The cell tower serving your rural property simply does not broadcast a 4G signal that reaches your physical address. 

For the last several years, you have been inadvertently relying 100% on the old 3G network. While it may have been slow, it was providing your internet.

### What to Do If You Are in a 4G Blackspot

If you are in a 4G blackspot, the March 2026 shutdown is a critical emergency for your household. You cannot just wait and hope it gets better. You have three options:

**1. The External Antenna Upgrade**
The 4G signal might be hovering just 10 meters above your house, but it cannot penetrate the roof and walls to reach the modem in your lounge. As detailed in our [Skinny Antenna Guide](/nz/telecom/skinny-4g-antenna-mod), purchasing a directional MIMO 4G antenna ($200) and mounting it on the highest point of your roof, pointed directly at the Spark tower, can often grab a 4G signal that previously didn't exist indoors.

**2. Wait for Spark's Tower Upgrades**
Spark is actively upgrading rural towers leading up to the 2026 shutdown. When they turn off the 3G frequencies (specifically the 850MHz band), they will immediately re-use that low-frequency spectrum to broadcast 4G and 5G further into rural valleys. Therefore, a 4G signal *might* magically appear at your house in March 2026. However, this is a massive gamble, and you will likely experience an outage during the transition phase.

**3. Switch to LEO Satellite (Starlink)**
If your property is heavily shadowed by mountains and no amount of antennas will pull a 4G signal from the Spark tower, you must abandon cellular broadband entirely. In 2026, Low Earth Orbit (LEO) satellite internet, primarily SpaceX's Starlink, is the only viable alternative. It requires a $599 hardware investment for the dish, but it provides 150Mbps+ speeds regardless of where you live in New Zealand, completely bypassing the terrestrial cellular network.

## A Warning for Voice Capabilities

There is one major caveat to forcing "4G Only" mode on a rural modem.

If you have a traditional home landline phone plugged into the back of your Spark/Skinny modem, you need to be very careful. 

Older modems (like the basic Huawei B315) do not support VoLTE (Voice over LTE) for home phone lines. When you make a phone call, the modem actually drops the internet connection briefly, switches to the 3G network to make the voice call, and then hops back to 4G when you hang up.

If you force **4G Only** on an older non-VoLTE modem, your home phone line will immediately stop working. You will not be able to make or receive calls.

If you rely on your landline for medical alarms or emergencies, you must:
1.  Call Spark Support immediately (before the 2026 shutdown).
2.  Tell them you need an urgent hardware upgrade to a **VoLTE-compatible modem**.
3.  Spark will usually courier a new modern wireless broadband unit free of charge to replace the aging B315, ensuring both your internet and voice calls work seamlessly on the new 4G-only network.

---

*This guide is part of the ErrorDocs NZ Telecom Rescue Series. Written and verified by NZ broadband specialists for 2026 hardware standards.*
