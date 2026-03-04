---
title: 'One NZ UltraHub Plus: How to Reset the Admin Password'
description: 'Locked out of your One NZ (formerly Vodafone) UltraHub Plus router settings? Learn how to find the default admin password, force a hard factory reset, and regain control of your home network.'
category: 'Telecom'
lastUpdated: 2026-03-05
country: 'nz'
author: 'ErrorDocs Tech Team'
image: '/images/onenz-ultrahub-password-reset.png'
tags: ['One NZ', 'Vodafone', 'UltraHub Plus', 'Password Reset', 'Admin Login', 'NZ Tech']
instantAnswer: 'To log into the One NZ UltraHub Plus, open a browser and go to 192.168.1.1. The default username is "vodafone". Look at the sticker on the bottom of the router to find the specific 10-character default password. If that password fails, someone has changed it. You must perform a factory reset: use a paperclip to hold down the hidden physical "Reset" button on the back of the router for exactly 15 seconds until the lights flash. This restores the default sticker password.'
faqs:
  - question: 'What is the standard IP address for the UltraHub Plus?'
    answer: 'The default login gateway for the UltraHub Plus is 192.168.1.1. If that fails to load, try 192.168.0.1. Ensure your device is actually connected to the UltraHub Wi-Fi or plugged in via an Ethernet cable before trying to load the page.'
  - question: 'Are the username and password both "admin"?'
    answer: 'No. While older generic routers often use admin/admin, Vodafone/One NZ customized the firmware on the UltraHub Plus. The username is strictly "vodafone". The password is a unique alphanumeric string (e.g., A7b9X2pQ) printed on the factory sticker.'
  - question: 'Will a factory reset delete my internet connection?'
    answer: 'No. The UltraHub Plus is configured through TR-069. When you wipe its memory, it will automatically contact the One NZ servers out on the internet, download your specific Fibre/VDSL profile, and reconnect you within 5 minutes. However, it will delete your custom Wi-Fi name and Wi-Fi password.'
  - question: 'Why does the reset button not seem to work?'
    answer: 'The physical reset button is deeply recessed to prevent accidental presses. You must use a stiff, thin object like a SIM ejector tool or a stretched paperclip. Press firmly until you feel a distinct mechanical "click," and do not release the pressure for a full 15 seconds. If you release it at 5 seconds, the router just reboots normally without wiping the memory.'
---

# One NZ UltraHub Plus: How to Reset the Admin Password

<div class='instant-fix-box'>
  <p>Locked out of <strong>192.168.1.1</strong>? The One NZ UltraHub username is always <strong>vodafone</strong>. The password is printed on the bottom sticker. If the sticker password does not work, you must execute a Hard Reset. Grab a paperclip. Locate the tiny pinhole labeled "Reset" on the back casing. Push the paperclip inside, feel the click, and <strong>hold it for 15 seconds</strong>. The modem lights will die and flash. In 5 minutes, the router will reboot, and the sticker password will work again.</p>
</div>

<AdSenseBlock slot='article-top' />

## The "admin/admin" Trap

The One NZ (formerly Vodafone) UltraHub Plus is the workhorse router sitting in thousands of New Zealand living rooms. It is a solid Wi-Fi 6 device, but it has one incredibly frustrating quirk for new users: logging in.

If you want to change your Wi-Fi name, set up parental controls to block your kids' iPads at 9:00 PM, or configure port forwarding for a PlayStation 5, you have to access the router's internal dashboard.

If you Google "How to log into a router," generic tech websites will tell you to type `192.168.1.1` into your browser and enter `admin` as the username and `admin` as the password.

If you try this on the UltraHub Plus, you will be instantly rejected.

One NZ hardcoded their own proprietary security layer into the firmware. Here is how to actually get in, and how to nuke the system if you have completely lost the password.

## Step 1: Finding the Default Credentials

Unless you (or a very tech-savvy flatmate) deliberately changed the internal security settings, the router is still using its factory passwords.

1.  Physically pick up the UltraHub Plus router. 
2.  Look at the large white sticker placed on the bottom (or sometimes the lower back) of the unit.
3.  Look for the section labeled **Modem Login** or **Admin Settings**.
4.  **Username:** This is standard across all units. It is `vodafone` (all lowercase, no spaces).
5.  **Password:** This is a randomly generated, unique 8-to-12 character string of letters and numbers (e.g., `Hf79kL2pW`). 

### How to Log In
1.  Connect your laptop or phone to the UltraHub Wi-Fi (or plug an ethernet cable into a yellow LAN port).
2.  Open Chrome, Safari, or Edge.
3.  Type **192.168.1.1** into the URL bar and press Enter.
4.  The One NZ login portal will appear.
5.  Type `vodafone` into the top box. Type the exact string from the sticker into the bottom box (passwords are strictly case-sensitive: a capital "H" is not the same as a lowercase "h").
6.  Click Login. 

<AdSenseBlock slot='article-middle' />

## Step 2: The Password Fails (The Flatmate Problem)

If you entered the credentials from the sticker perfectly, but the screen flashes red and says **"Incorrect Password"**, you have a problem.

This means that at some point in the past, someone logged into the dashboard and chose to overwrite the factory password with their own custom master password. 

This usually happens in flatting situations. A previous flatmate sets up the internet, changes the admin password so nobody else can mess with the bandwidth rules, and then moves out without telling anyone the password.

There is no "Forgot Password" button. There is no email recovery link. The router is a sealed security box. 

You cannot bypass it. You have to destroy the entire configuration and start again.

## Step 3: The 15-Second Hard Factory Reset

A hard factory reset forcefully wipes the memory chip inside the UltraHub Plus. It deletes all custom rules, all custom Wi-Fi names, and most importantly, it deletes the custom admin password. 

It forcefully reverts the router back to the exact code printed on the sticker.

1.  **Leave the router turned ON.** It must be plugged into the wall and fully booted up.
2.  Find a thin, rigid object. A stretched-out metal paperclip or a smartphone SIM-ejector tool is perfect. A toothpick is a bad idea because the wood can snap off inside the hole.
3.  Look at the back panel of the router, near the colored Ethernet ports. 
4.  Locate the tiny, recessed pinhole deliberately labeled **Reset**.
5.  Insert the paperclip perpendicularly into the hole. Press gently until you feel a distinct mechanical click.
6.  **Hold the button down and count slowly to 15.** 
7.  Do not release the pressure at 5 seconds. If you just click it quickly, the router assumes you want to perform a simple reboot (turning it off and on again), which will not wipe the password.
8.  At exactly 15 seconds, all the LED lights on the front of the router will suddenly turn off simultaneously, and then flash. 
9.  Release the paperclip.

## Step 4: Rebuilding the Network (The 5-Minute Wait)

The moment you release the button, the router goes into emergency recovery mode. 

**Do not touch the router. Do not unplug the power. Just watch it.**

1.  The UltraHub will boot up its core operating system.
2.  It will establish a basic link with the Chorus Fibre box on your wall.
3.  It will ping the master One NZ TR-069 configuration servers located in Auckland.
4.  It will say: *"I have amnesia. I am at this specific house. Give me my internet settings."*
5.  The One NZ server will silently push the correct Fibre/VDSL profile down the line into your router. 
6.  The "Internet" light on the front panel will turn solid blue or green.

This entire automated process takes roughly 3 to 5 minutes.

Once the internet light is stable, open your laptop. Connect to the default Wi-Fi network printed on the sticker (using the default Wi-Fi password). 

Open your browser, go to **192.168.1.1**, type `vodafone` and the sticker password. You will instantly be granted access to the dashboard. You have successfully regained control of your network.

---

*This guide is part of the ErrorDocs NZ Telecom Rescue Series. Written and verified by NZ broadband specialists for 2026 hardware standards.*
