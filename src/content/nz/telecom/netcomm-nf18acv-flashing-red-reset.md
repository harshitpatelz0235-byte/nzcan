---
title: 'NetComm NF18ACV Flashing Red: The 2-Minute Factory Reset Hack'
description: 'Is your NetComm NF18ACV router showing a flashing red internet light? Do not wait on hold for an hour. Learn the exact 2-minute factory reset process and how to re-enter the VLAN 10 settings to restore your NZ fibre connection instantly.'
category: 'Telecom'
lastUpdated: 2026-03-05
country: 'nz'
author: 'ErrorDocs Tech Team'
image: '/images/netcomm-nf18acv-flashing.png'
tags: ['NetComm', 'NF18ACV', 'Flashing Red', 'Factory Reset', 'VLAN 10', 'NZ Tech']
instantAnswer: 'A flashing red light means the router has lost its authentication or VLAN settings. To fix it, hold the Reset button on the back for 10 seconds. Once it reboots, log in at 192.168.20.1 (admin/admin), go to Internet Setup, select VDSL/Ethernet, enable VLAN tagging, set VLAN ID to 10, and choose DHCP. Your internet will turn green within 60 seconds.'
faqs:
  - question: 'Why does the red light start flashing randomly?'
    answer: 'This usually happens after an automated firmware update pushed by your ISP fails, or if there is a sudden power cut that corrupts the routers configuration file. The router forgets how to talk to the Chorus network.'
  - question: 'Will a factory reset delete my Wi-Fi password?'
    answer: 'Yes. A factory reset restores the Wi-Fi name and password to the default ones printed on the sticker on the bottom of the router. You will need to reconnect all your devices to the default network, or log in and change the name back to your custom one.'
  - question: 'What if I am on VDSL instead of Fibre?'
    answer: 'The process is almost identical. During setup, select VDSL instead of Ethernet WAN. Ensure VLAN tagging is still enabled and set to 10. Most NZ VDSL connections use PPPoE authentication, so you will need your ISP username and password.'
  - question: 'The light is solid red, not flashing. Is it different?'
    answer: 'A solid red light usually indicates a physical line fault or an outage at the exchange, rather than a configuration error. Check the Chorus outage map first before attempting a factory reset.'
---

# NetComm NF18ACV Flashing Red: The 2-Minute Factory Reset Hack

<div class='instant-fix-box'>
  <p>If the internet light on your NetComm NF18ACV is flashing red, the router has lost its network configuration. Do not call support yet. Hold the tiny Reset button on the back for 10 seconds. After it reboots, log in at 192.168.20.1, navigate to Internet Setup, enable VLAN tagging with ID 10, and set the connection type to DHCP. The light will turn green and your internet will be back online in under two minutes.</p>
</div>

<AdSenseBlock slot='article-top' />

## The Dreaded Flashing Red Light Explained

The NetComm NF18ACV is the workhorse of the New Zealand broadband industry. It has been shipped by Slingshot, Orcon, 2degrees, Trustpower, and almost every other mid-tier ISP since 2018. It is a reliable router, but it has one specific, infuriating habit in 2026: waking up with a flashing red internet light.

You try turning it off and on again. The power light turns green, the Wi-Fi lights turn green, but the internet light goes straight back to flashing red. Your devices connect to Wi-Fi, but say "No Internet Connection."

If you call your ISP, you will sit on hold for 40 minutes, only for a level 1 support agent to read from a script and tell you to "reboot it again."

Here is the technical reality: **A flashing red internet light on the NF18ACV means the physical connection is fine, but the logical connection has failed.** The router can physically see the Chorus network, but it has forgotten the "handshake" settings required to actually send data.

This happens for two main reasons in New Zealand:
1.  **Firmware Update Failure:** ISPs push automated updates to these routers in the middle of the night. If the update process glitches, the configuration file gets corrupted.
2.  **Power Spikes:** A brief brown-out or power spike (very common in rural NZ or older suburbs) can momentarily scramble the router's flash memory.

The solution is not a reboot. The solution is a hard factory reset followed by manually re-entering the required NZ network settings. Let's do it right now.

## Step 1: The Hard Factory Reset

You must reset the router completely to clear out the corrupted configuration file. Simply turning it off at the wall does not do this.

1.  Leave the router turned **ON** and plugged into the wall.
2.  Locate the tiny hole labeled **Reset** on the back panel, near the power button.
3.  Take a paperclip, a SIM ejector tool, or a very fine-tipped pen.
4.  Insert the tool into the hole and press the internal button. You will feel a slight click.
5.  **Hold it down firmly for exactly 10 seconds.**
6.  Release the button.

Watch the lights on the front. All the lights will suddenly turn off, then the power light will turn red, then green. The router is now rebooting. This process takes about 90 to 120 seconds. Wait until the power and Wi-Fi lights are solid green. The internet light will still be red or off. This is normal.

## Step 2: Logging Back In

Because you factory reset the router, your custom Wi-Fi password is gone. It has reverted to the factory default.

1.  Look at the white sticker on the bottom of the router. Find the **Default SSID** (Wi-Fi Name) and **Wireless Key** (Password).
2.  On your phone or laptop, connect to this default Wi-Fi network.
3.  Open a web browser (Chrome, Safari, Edge).
4.  In the address bar, type **192.168.20.1** and press Enter.

You will see the NetComm login screen.
*   **Username:** admin
*   **Password:** admin (If you are with Contact Energy/Trustpower, the password is **Trustpower** with a capital T).

## Step 3: The Secret NZ VLAN Settings

This is the step that separates a broken router from a working one. To connect to the internet in New Zealand via the Chorus network, your router must tag all its traffic with a specific identifier called **VLAN 10**.

When you factory reset the NF18ACV, it forgets about VLAN 10. You have to manually put it back.

1.  Once logged in, click on **Basic Setup** or **Internet Setup** from the main menu.
2.  Choose your connection type. If you are on Fibre, select **Ethernet WAN**. If you are on VDSL, select **VDSL**.
3.  Choose the **Protocol** or **Connection Type**. For 90% of modern NZ connections (including Slingshot, Orcon, and 2degrees Fibre), select **IP over Ethernet (IPoE)** or **DHCP**. (If you are with an older provider that uses logins, select PPPoE and have your username/password ready).
4.  **The Critical Step:** Look for a checkbox labeled **802.1Q VLAN** or **VLAN Tagging**. Check this box to enable it.
5.  Set the **VLAN ID** to **10**.
6.  Set the **Priority** to **0**.
7.  Click **Apply** or **Save**.

<AdSenseBlock slot='article-middle' />

## Step 4: Watch the Lights

After clicking Save, look at the front of your router.

Within 30 to 60 seconds, the internet light should stop flashing red, turn off briefly, and then light up solid green or solid blue (depending on the exact firmware version).

Congratulations. You have just completed the exact process that a $150-an-hour IT technician would have performed in your lounge. Your internet is back.

## Post-Reset Cleanup: Fixing Your Wi-Fi

Because you are now using the default Wi-Fi name and password printed on the sticker, any smart TVs, security cameras, or other laptops in your house will not automatically reconnect. They are still looking for your old custom Wi-Fi name.

You have two choices:
1.  Walk around your house and reconnect every single device to the new default network.
2.  **The better option:** Change the router's Wi-Fi name and password back to what it was yesterday.

To change it back:
1.  In the NetComm admin menu, navigate to **Wireless** -> **2.4GHz** -> **Basic**.
2.  Change the **SSID** to your old Wi-Fi name. Click Save.
3.  Go to **Wireless** -> **2.4GHz** -> **Security**.
4.  Change the **WPA Passphrase** to your old password. Click Save.
5.  Repeat this process for the **5GHz** menu.

Once you click save, your phone will disconnect. Within a minute, your old custom Wi-Fi network will reappear, and all your smart devices will instantly reconnect as if nothing ever happened.

## Important: PPPoE vs DHCP for NZ ISPs

In Step 3, choosing between DHCP (IPoE) and PPPoE is the only place where you might get stuck. Here is the definitive cheat sheet for NZ fibre providers in 2026:

**Use DHCP / IPoE if you are with:**
*   Slingshot
*   Orcon
*   2degrees (Fibre)
*   Contact Energy (most modern plans)
*   Skinny
*   Nova Energy

**Use PPPoE if you are with:**
*   Some older Trustpower VDSL plans
*   Spark (if using the NF18ACV as a third-party router)
*   Small regional providers

If you select DHCP and the light stays red after 5 minutes, you are likely on a PPPoE connection. You will need to change the setting to PPPoE and enter the username and password provided by your ISP when you joined. If you do not know these, *now* is the time to call support and specifically ask for your PPPoE credentials.

## What If It Shuts Down Again Tomorrow?

If you perform this 2-minute hack and the router works perfectly, but tomorrow morning you wake up and it is flashing red again, you have a failing router.

The flash memory chip inside the NF18ACV designed to store your settings permanently has degraded. This is a common hardware failure for units manufactured between 2018 and 2020. The router works when powered on, but the moment it does an overnight diagnostic reboot, the memory chip wipes itself and forgets the VLAN 10 setting.

There is no software fix for a dying memory chip. You need new hardware.

**How to get a free replacement:**
Call your ISP and state:
> "My NetComm NF18ACV has a failing NVRAM chip. I have performed a factory reset and manually applied the VLAN 10 configuration. The router connects successfully, but it loses the configuration entirely upon rebooting. This is a confirmed hardware failure. Can you please arrange a replacement router to be couriered?"

Using terms like "NVRAM chip" and "VLAN 10" proves you have completed the necessary troubleshooting. The tier 1 support agent will see you are not a novice and will typically process the replacement immediately rather than forcing you through their scripted reboot cycle.

If you are off-contract and they refuse to supply a free router, do not buy another NetComm. Head to **PB Tech** and purchase a **TP-Link Archer AX73** for around $180 NZD. It is vastly superior in Wi-Fi range and handles NZ VLAN 10 tagging perfectly.

---

*This guide is part of the ErrorDocs NZ Telecom Rescue Series. Written and verified by NZ broadband specialists for 2026 hardware standards.*
