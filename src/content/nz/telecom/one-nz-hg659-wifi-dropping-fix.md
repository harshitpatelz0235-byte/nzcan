---
title: 'One NZ HG659 Router: How to Fix Wi-Fi Dropping Out'
description: 'Does your phone randomly disconnect from your old Vodafone HG659 router, requiring a restart? Learn the engineering reason why this specific hardware drops Wi-Fi and how to permanently stabilize it.'
category: 'Telecom'
lastUpdated: 2026-03-05
country: 'nz'
author: 'ErrorDocs Tech Team'
image: '/images/onenz-hg659-wifi-drop-fix.png'
tags: ['One NZ', 'Vodafone', 'HG659', 'Wi-Fi Drops', 'Router Fix', 'NZ Tech']
instantAnswer: 'The Huawei HG659 drops Wi-Fi because its internal "Band Steering" software is severely outdated. It tries to force your phone between 2.4GHz and 5GHz, crashes, and kicks you off. To fix it: Log into 192.168.1.1 (vodafone/vodafone). Go to Home Network > WLAN Settings. Find the "Band Steering" option and turn it OFF. Then, rename your 5GHz network so it has a different name (e.g., Vodafone_Home_5G).'
faqs:
  - question: 'Why is my HG659 router getting so hot?'
    answer: 'The Huawei HG659 was released over a decade ago. The internal thermal paste on the CPU degrades over time. When you connect 20 modern smart devices to it, the CPU runs at 100% capacity and overheats. If the plastic casing feels burning hot to the touch, the router is thermally throttling and intentionally dropping Wi-Fi to save itself from melting.'
  - question: 'Will One NZ replace my old Vodafone HG659 for free?'
    answer: 'Yes. In 2026, the HG659 is officially classified as "End of Life" legacy hardware. If you call One NZ support and explain that the router is dropping Wi-Fi daily and feels excessively hot, they will usually courier you a brand new, modern Wi-Fi 6 router (like the DN8245 or SuperWifi node) completely free of charge to close the support ticket.'
  - question: 'What is the best Wi-Fi channel for the HG659?'
    answer: 'Leave the 5GHz band on "Auto". For the crowded 2.4GHz band, manually switch the channel to either 1, 6, or 11. These are the only three non-overlapping channels. Do not use channels 3, 4, 7, or 9, as they will aggressively interfere with your neighbors Wi-Fi.'
  - question: 'Does a firmware update fix the Wi-Fi drops?'
    answer: 'No. Huawei stopped manufacturing the HG659 years ago, and Vodafone/One NZ stopped pushing firmware updates for it long before that. The hardware is simply incapable of seamlessly handling modern 802.11ac protocols. The manual band split is the only software fix.'
---

# One NZ HG659 Router: How to Fix Wi-Fi Dropping Out

<div class='instant-fix-box'>
  <p>To stop the Vodafone/One NZ Huawei HG659 from randomly dropping Wi-Fi connections, you must disable Band Steering. Log into <strong>192.168.1.1</strong> using the password on the back of the router (or <em>vodafone</em> / <em>vodafone</em>). Go to <strong>Home Network</strong> > <strong>WLAN Settings</strong>. Uncheck the "Band Steering" box. Next, click on "WLAN Encryption." Change the SSID (Name) of the 5GHz network so it is different from the 2.4GHz network. Reconnect your devices.</p>
</div>

<AdSenseBlock slot='article-top' />

## The Legacy Hardware Curse

If you look at your internet router and see the logo of a red speech-mark (the old Vodafone logo) stamped on a black, curved box, you are using the **Huawei HG659**.

Between 2015 and 2019, Vodafone shipped hundreds of thousands of these units across New Zealand. They were absolute workhorses, surviving the transition from ADSL copper to high-speed Chorus Fibre. 

However, in 2026, the HG659 is a digital dinosaur. 

The most common symptom of its old age is maddening Wi-Fi instability. Your iPhone will suddenly lose its connection, drop back to 4G mobile data, and refuse to rejoin the home Wi-Fi until you physically walk over to the router and switch it off and on at the wall. 

Two hours later, the exact same thing happens to your smart TV. 

You aren't imagining things. This isn't an internet outage; the Fibre connection coming into your house is fine. The problem is a fundamental flaw in how the HG659 handles modern wireless radio waves. Here is how to hack the settings to force stability.

## The Culprit: "Band Steering"

Modern routers broadcast two invisible Wi-Fi networks simultaneously:
1.  **2.4GHz:** Very slow, but travels through walls easily.
2.  **5GHz:** Incredibly fast, but blocked easily by walls. 

The HG659 features a technology called **Band Steering**. This software forces both the 2.4GHz and 5GHz networks to share the exact same Wi-Fi name and password. 

In theory, Band Steering is great. As you walk out of the lounge (away from the 5GHz signal) and into the bedroom, the router is supposed to silently "hand over" your phone to the 2.4GHz signal without you noticing. 

**The Reality:** The CPU inside the HG659 is too old and too slow to handle modern Apple and Android handover protocols. 

When you walk down the hallway, your iPhone aggressively tries to hold onto the fast 5GHz signal even when it's weak. The HG659 panics, tries to force the phone onto the 2.4GHz band, encounters a software logic error, and simply kicks your phone entirely off the network.

To fix the dropouts, we have to permanently disable this "smart" feature. 

## The Fix: Splitting the Wi-Fi Bands

By physically splitting the two networks, you take the decision-making power away from the old Huawei router and give it to your smart, modern phone.

### Step 1: Log into the HG659
1.  Connect a laptop or computer to the router via a yellow Ethernet cable (do not try fixing Wi-Fi issues *over* Wi-Fi).
2.  Open your browser and go to **192.168.1.1**.
3.  The Vodafone login screen will appear. 
4.  If you have never changed it, the default Username is `vodafone` and the default Password is `vodafone`. (If that fails, check the sticker on the back of the router for a unique password).

### Step 2: Disable Band Steering
1.  From the top menu, click on **Home Network**.
2.  On the left-hand menu, click on **WLAN Settings**.
3.  Look for a master checkbox labeled **Band Steering** or **Smart Setup**. 
4.  Uncheck that box immediately. Click **Save**.

### Step 3: Rename the 5GHz Network
Now that the router isn't forcing them together, we need to explicitly tell them apart.

1.  Still under WLAN Settings, click on **WLAN Encryption** to expand the menu.
2.  You will now see two distinct networks listed: **2.4GHz** and **5GHz**.
3.  Look at the SSID (Network Name) for the 5GHz network.
4.  Change the name slightly. If your main Wi-Fi name is "SmithFamily", change the 5GHz name to **"SmithFamily_5G"**.
5.  Click **Save**. The router will apply the settings.

<AdSenseBlock slot='article-middle' />

### Step 4: Reconnecting the Smart Way

Because you changed the name, all devices in your house will briefly disconnect. Here is how to arrange your devices for max stability:

*   **Connect your Phones, Laptops, and Smart TVs exclusively to the new "_5G" network.** Because you control the network manually now, your phone will never be randomly kicked off by a faulty Band Steering algorithm. It will hold the fast 5G signal flawlessly.
*   **Connect your Smart Plugs, Wi-Fi Lightbulbs, and Wireless Printers to the old 2.4GHz network.** These cheap "Internet of Things" devices use very little data, but need massive range to reach the garage or front gate. The 2.4GHz band is perfectly stable when you aren't trying to force an iPhone 16 onto it.

## The Overheating Hardware Death

If you have carefully split the 2.4GHz and 5GHz bands, but the router is *still* randomly rebooting or dropping the connection for the entire house all at once, you have a hardware failure. 

Place your hand flat on the top plastic casing of the HG659. 

Is it warm? Or is it genuinely hot to the touch?

Inside the router is a small computer processor with a tiny silicone thermal pad designed to transfer heat away. After 7 to 10 years of running 24/7, that thermal pad has turned to dry dust. 

When your family comes home at 5:00 PM and 15 different smart devices instantly connect to the Wi-Fi, the router CPU spikes to 100% capacity. Because the thermal pad is dead, the CPU overheats within 20 minutes. Modern silicon chips have an automated safety feature: when they reach critical temperature, they shut down to prevent a fire.

Your router is literally blacking out from heat stroke, rebooting, and letting the Wi-Fi come back on once it has cooled down.

### Claiming Your Free Upgrade

You cannot fix thermal degradation. Do not waste money buying Wi-Fi extenders. 

The HG659 is objectively classified by One NZ as EOL (End of Life) legacy hardware. It is no longer supported by modern firmware security patches.

In 2026, ISPs are desperate to get these old devices off their network because they generate massive amounts of expensive phone calls to their customer support centers.

1.  Call One NZ Technical Support.
2.  Tell the agent: *"My Vodafone HG659 router is dropping the Wi-Fi connection multiple times a day. More importantly, the plastic casing is dangerously hot to the touch, and I believe it is a fire hazard."*
3.  The agent will not argue with you. The phrase "fire hazard" guarantees an instant, no-questions-asked hardware replacement.
4.  They will courier you a brand new, modern Wi-Fi 6 router (typically a white DN8245 or a SuperWifi node) completely free of charge. 

Your Wi-Fi dropouts will instantly disappear, your speeds will double, and your home network will finally be ready for 2026.

---

*This guide is part of the ErrorDocs NZ Telecom Rescue Series. Written and verified by NZ broadband specialists for 2026 hardware standards.*
