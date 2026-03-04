---
title: '2degrees Broadband Dropping at Night? The VDSL Sync Trick'
description: 'Is your 2degrees broadband connection dropping every evening between 7pm and 11pm? Learn the VDSL sync rate trick, how to check your SNR margin, and when to demand a free line test from Chorus.'
category: 'Telecom'
lastUpdated: 2026-03-05
country: 'nz'
author: 'ErrorDocs Tech Team'
image: '/images/2degrees-night-dropout.png'
tags: ['2degrees', 'Broadband', 'VDSL', 'Dropout', 'SNR Margin', 'NZ Tech']
instantAnswer: 'Your 2degrees broadband drops at night because your VDSL line syncs at a speed that is too aggressive for your copper cable distance. Log in to your modem at 192.168.20.1, find the DSL Status page, and check your SNR Margin. If it is below 6dB, your line is unstable. Contact 2degrees and ask them to apply an SNR Target Profile of 9dB or 12dB to stabilize the connection.'
faqs:
  - question: 'Why does my broadband only drop at night and not during the day?'
    answer: 'During the day, fewer people in your street are using broadband. The DSLAM (the Chorus cabinet on the street) has less electrical noise. At night, every house fires up Netflix, gaming, and streaming, creating crosstalk interference in the copper cables. This pushes your already marginal connection over the edge.'
  - question: 'What is an SNR margin and why does it matter?'
    answer: 'SNR stands for Signal to Noise Ratio. It measures the strength of your broadband signal compared to the electrical noise on the line. An SNR margin of 6dB or higher is needed for stable VDSL. Below 6dB, the modem repeatedly loses sync and reconnects.'
  - question: 'I am on fibre, not VDSL. Why is my connection dropping at night too?'
    answer: 'Fibre users do not have VDSL sync issues. Your drops are likely caused by Wi-Fi congestion from neighbours, your modem overheating, or Chorus network congestion during peak hours. Try the 5GHz channel optimization in our separate guide.'
  - question: 'Can I apply the SNR profile change myself?'
    answer: 'No. SNR Target Profiles are controlled by Chorus and can only be changed by your ISP. You need to call 2degrees and specifically request they change your line profile. Use the technical language in our ISP script section to get this done quickly.'
---

# 2degrees Broadband Dropping at Night? The VDSL Sync Trick

<div class='instant-fix-box'>
  <p>Your 2degrees VDSL broadband drops every evening because the copper line sync rate is set too aggressively for your cable distance from the Chorus cabinet. The fix is to call 2degrees on 0800 022 022 and request an SNR Target Profile increase to 9dB or 12dB. This trades a small amount of maximum speed for a rock-solid connection that does not drop during peak hours.</p>
</div>

<AdSenseBlock slot='article-top' />

## Why Your Internet Dies Every Evening

It is 7:30pm. You are settling in for the evening. You open Netflix and the buffering wheel appears. Your partner yells from the other room that their Zoom call just froze. The kids are complaining that Roblox kicked them. You walk over to the modem and see the DSL light blinking frantically. It does this for 2 minutes, then stabilizes. Then drops again 20 minutes later.

This pattern of evening dropouts is the single most common complaint from 2degrees VDSL customers in New Zealand. And the root cause is not 2degrees specifically. It is a fundamental physics problem with copper telephone lines that feeds every VDSL connection in the country.

Let me explain exactly what is happening inside the cables running from your house to the Chorus cabinet on your street, and then give you the exact fix.

## The Physics of VDSL and Copper Crosstalk

VDSL (Very-high-bit-rate Digital Subscriber Line) delivers internet over the same copper telephone wires that have been in the ground since your grandparents' generation. The technology is impressive. Modern VDSL2 can push up to 100Mbps over copper by using extremely high-frequency signals.

The problem is that your copper wire is bundled together with dozens (sometimes hundreds) of other copper wires in the same underground cable running down your street. Each wire is carrying VDSL signals for a different household. When one wire carries a high-frequency signal, it creates electromagnetic interference that leaks into the neighbouring wires. This is called **crosstalk**.

During the day, maybe 20 percent of the houses on your street are actively using the internet. The crosstalk is manageable. Your modem syncs at a high speed and the connection holds.

At 7pm, everything changes. Families come home from work and school. Every household fires up streaming, gaming, video calls, and downloads simultaneously. Now 80 to 90 percent of the copper pairs in that underground bundle are screaming high-frequency signals at the same time. The crosstalk becomes overwhelming.

Your modem constantly monitors the signal quality using a metric called the **SNR Margin** (Signal to Noise Ratio). When crosstalk increases, the noise floor rises and the SNR margin shrinks. When it drops below approximately **6dB**, the modem cannot reliably decode the incoming data. It loses sync, disconnects, and then tries to re-establish the connection. This is what causes the 2-minute dropout cycle you see every evening.

## How to Check Your SNR Margin

Before you call 2degrees, you should check your actual SNR numbers. This gives you hard data to use when speaking with support, and it confirms that the issue is indeed crosstalk and not something else.

### Step 1: Log in to Your Modem

Most 2degrees modems use the admin page at **192.168.20.1**. Open a browser, type this in the address bar, and press Enter.

The default login for 2degrees-supplied routers depends on the model:
*   **FritzBox:** Username is usually blank, password on the base sticker
*   **NetComm NF18ACV:** admin / admin or check base sticker
*   **Huawei HG659:** admin / admin

### Step 2: Find the DSL Status Page

Once logged in, navigate to **Internet** or **DSL** or **WAN** status. The exact location depends on your modem model, but you are looking for a page that shows your DSL line statistics.

On a FritzBox, go to **Internet** then **DSL Information** then **Overview**.

### Step 3: Read the Numbers

You are looking for these key values:

| Metric | Healthy Value | Problem Value |
| :--- | :--- | :--- |
| SNR Margin (Downstream) | 8dB or higher | Below 6dB |
| SNR Margin (Upstream) | 8dB or higher | Below 6dB |
| Sync Rate (Downstream) | Close to plan speed | Fluctuating wildly |
| Attenuation (Downstream) | Below 40dB | Above 50dB |
| CRC Errors | Below 100 per hour | Above 1000 per hour |
| FEC Errors | Below 1000 per hour | Above 10000 per hour |

The critical number is the **SNR Margin**. If it is sitting at 3dB, 4dB, or 5dB during peak evening hours, your connection is on a knife edge. Any small increase in crosstalk will push it below the sync threshold and cause a dropout.

### Step 4: Monitor Over Time

Check the DSL status page at three different times:
1.  **Morning (10am):** The SNR margin will likely be 8dB to 12dB. This is the quiet period.
2.  **Afternoon (3pm):** It may start to dip slightly as schools finish.
3.  **Peak (8pm to 9pm):** This is when you will see the lowest numbers. If it drops below 6dB, you have confirmed the problem.

Write these numbers down. You will need them when calling support.

<AdSenseBlock slot='article-middle' />

## The SNR Target Profile Fix

Now that you have confirmed the issue, here is the fix that 2degrees will not proactively offer you, but they can absolutely apply it.

### What Is an SNR Target Profile?

When your modem first connects to the Chorus DSLAM (the equipment in the green cabinet on your street), they negotiate a sync speed. The DSLAM says 'I can deliver this much data at this frequency' and your modem agrees. The SNR Target Profile tells the DSLAM how much margin to leave between the signal and the noise floor.

By default, Chorus sets the SNR Target to **6dB**. This gives your modem the absolute maximum sync speed, but with almost zero safety margin. It is like driving at the maximum speed limit on a wet road. You might be fine most of the time, but one pothole and you crash.

If Chorus increases the SNR Target to **9dB** or **12dB**, the DSLAM intentionally syncs your modem at a slightly lower speed, but with a much larger safety margin. Now the crosstalk at 8pm can increase without pushing you below the dropout threshold.

### The Speed Trade-Off

Let me be honest about what this costs you. Increasing the SNR target reduces your maximum sync speed. Here are typical numbers for a line with 30dB attenuation (medium distance from the cabinet):

| SNR Target | Approximate Sync Speed | Stability at Peak |
| :--- | :--- | :--- |
| 6dB (default) | 65 Mbps | Drops every 20-30 minutes |
| 9dB | 55 Mbps | Solid, rare drops |
| 12dB | 45 Mbps | Rock solid, zero drops |

The question is: would you rather have a connection that claims 65Mbps but drops to zero every 20 minutes, or a connection that delivers 45Mbps consistently all evening? For streaming, gaming, and video calls, the stable 45Mbps is infinitely better.

## How to Get 2degrees to Apply the Fix

This is where you need to be firm and use technical language to bypass the basic troubleshooting script.

Call **2degrees on 0800 022 022**. When connected to the technical support team, say:

> 'Hello. I have been monitoring my VDSL line statistics through my modem admin page. During peak hours between 7pm and 10pm, my SNR Margin on the downstream drops to [YOUR NUMBER]dB and I am experiencing repeated loss of sync. My CRC error count exceeds [YOUR NUMBER] per hour during this period. I believe my Chorus line profile has the SNR Target set to the default 6dB, and I would like to request an increase to 9dB to improve stability. Can you please raise a profile change request with Chorus?'

Key phrases to use:
*   **SNR Margin** (shows you understand the technical metric)
*   **Loss of sync** (the correct engineering term, not 'internet dropping')
*   **Chorus line profile** (shows you know it is a Chorus-level setting, not a modem issue)
*   **Profile change request** (tells the agent exactly what action you want)

The support agent may try to walk you through basic reboot steps. Politely decline and restate that you have already performed troubleshooting and are requesting a specific profile change. By law, they must escalate profile change requests to Chorus.

Chorus typically processes profile changes within 24 to 48 hours. After the change is applied, your modem will resync. Check the DSL status page again. Your sync speed will be slightly lower, but the SNR margin should now be 9dB or higher even during peak hours.

## Other Factors That Cause Evening Dropouts

While the SNR profile is the most common fix, there are other issues worth investigating:

### Old Internal House Wiring

If your house was built before 2000, the internal telephone wiring may be deteriorated or poorly shielded. This internal wiring adds noise to the VDSL signal. Some NZ homes have multiple phone jacks wired in a 'daisy chain' configuration that acts like a noise antenna.

**Fix:** Ask Chorus for a **direct home run** installation. This means the Chorus technician runs a new cable directly from the outside boundary point to your modem, bypassing all internal wiring. This is the single most effective physical improvement for VDSL stability.

### Corroded Outside Connection Point

The point where the Chorus cable enters your property (usually a small grey box on the outside wall) can corrode over time, especially in coastal NZ areas (Tauranga, Wellington, Nelson). Corroded connections cause intermittent resistance changes that destabilize the VDSL signal.

**Fix:** Ask Chorus to inspect the **ETP (External Termination Point)**. This is covered under their network maintenance responsibility and should be done for free.

### Faulty Modem

If your 2degrees modem is more than 3 years old, its DSL chipset may be degrading. This is particularly common with the older Huawei HG659 units.

**Fix:** Call 2degrees and request a modem replacement. If you are on a contract, they should provide one for free. If you are on a month-to-month plan, a new NetComm NF18ACV costs about $120 from PB Tech.

### Central Splitter Missing

If your house has a DSL connection and other devices (like a monitored alarm or fax machine) sharing the phone line, you need a central splitter. Without it, these devices inject noise onto the VDSL frequency band.

**Fix:** Go to **Jaycar NZ** or **Bunnings** and buy an ADSL/VDSL central splitter (about $15). Install it at the point where the phone line enters your house, before it branches to other devices.

## When VDSL Is Not Enough: Consider Fibre

If your SNR margin is consistently below 3dB even with a 12dB target profile, and your sync speed has dropped below 20Mbps, your copper line may simply be too long or too degraded for reliable VDSL.

The permanent fix is switching to **fibre**. Check the **Chorus website** or call 2degrees to see if fibre is available at your address. In 2026, fibre is available to over 87 percent of NZ addresses. The installation is free for standard residential connections.

Fibre eliminates every copper-related issue discussed in this article. There is no crosstalk, no SNR margin, no sync rate negotiation. It is pure light through glass. Your connection will be the same speed at 3am as it is at 8pm.

---

*This guide is part of the ErrorDocs NZ Telecom Rescue Series. Written and verified by NZ broadband specialists for 2026 hardware standards.*
