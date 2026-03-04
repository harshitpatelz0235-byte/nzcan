---
title: 'Vodafone to One NZ Rebrand: Your Old Router Administrator Password'
description: 'Still using an old Vodafone-branded router on your One NZ connection? Learn the secret default passwords, how firmware updates have changed them, and how to regain access to your UltraHub admin panel in 2026.'
category: 'Telecom'
lastUpdated: 2026-03-05
country: 'nz'
author: 'ErrorDocs Tech Team'
image: '/images/vodafone-onenz-router-password.png'
tags: ['One NZ', 'Vodafone', 'UltraHub', 'Router Login', 'Administrator Password', 'NZ Tech']
instantAnswer: 'If you have an older Vodafone UltraHub (white upright unit), the default admin login at 192.168.1.254 is usually username: "vodafone" and password: "vodafone". However, if One NZ recently pushed a firmware update to your older router, the login may have silently changed to username: "admin" and password: "admin", or it now requires the unique password printed on the sticker on the back of the unit.'
faqs:
  - question: 'Why does "vodafone/vodafone" not work anymore?'
    answer: 'In 2024 and 2025, One NZ pushed remote firmware updates to older Vodafone-branded UltraHubs to improve security. This update automatically erased the old generic "vodafone" password and replaced it with either "admin" or the unique serial-based password found on the back sticker.'
  - question: 'What if none of the passwords on the sticker work?'
    answer: 'Someone in your house has previously logged in and changed the admin password to a custom one. To clear it, you must perform a factory reset. Hold a paperclip in the Reset hole on the back of the router for 10 seconds. It will reboot and revert back to the password printed on the sticker.'
  - question: 'Does the One NZ rebrand mean I need to buy a new modem?'
    answer: 'No. The Vodafone-branded UltraHubs and UltraHub Plus models work perfectly on the One NZ network. "One NZ" is literally just a new sticker on the same company. The internal network hardware is identical.'
  - question: 'Can One NZ support reset the password for me?'
    answer: 'No. One NZ support agents cannot see your router admin password, nor can they remotely reset it to a custom word for you. They will simply tell you to stick a paperclip in the reset hole on the back.'
---

# Vodafone to One NZ Rebrand: Your Old Router Administrator Password

<div class='instant-fix-box'>
  <p>Trying to log into a Vodafone-branded router at 192.168.1.254? Try <strong>vodafone</strong> (lowercase) for both username and password. If that fails, One NZ has already updated your firmware. Try <strong>admin</strong> for both. If that also fails, you must use the unique password printed on the sticker on the back of the router. If you have lost the sticker, hold the Reset button for 10 seconds and try <strong>admin / admin</strong> again.</p>
</div>

<AdSenseBlock slot='article-top' />

## The "New Name, Old Hardware" Confusion

In early 2023, Vodafone New Zealand officially rebranded to One NZ. They changed the signs on the shops, updated the billing emails, and started shipping new "One NZ" branded modems to new customers.

But if you were an existing Vodafone customer, you did not get a new modem. You kept the white Vodafone UltraHub or the older black Huawei HG659 that had been sitting in your lounge for years. The internet kept working, so you correctly ignored it.

Fast forward to 2026. You want to change your Wi-Fi name, set up port forwarding for a PlayStation, or disable the guest network. You open a browser, go to the router admin page at **192.168.1.254**, and suddenly you cannot get in.

The old password you wrote down on a Post-it note isn't working. The password on the back of the machine isn't working. You search Google, but all the advice is for the "new" One NZ routers, not your old Vodafone one. 

Are the old routers broken? No. But the rebrand triggered a wave of silent, overnight firmware updates that fundamentally changed how the older hardware authenticates users.

## The Three Generations of Vodafone/One NZ Passwords

To get back into your router, you need to know which generation of security firmware your device is currently running. Because One NZ rolls updates out regionally across New Zealand, two identical-looking modems on the same street might require completely different passwords.

Here is the hierarchy of passwords you must try, in exactly this order.

### Generation 1: The "vodafone" Era (Pre-2023 Firmware)

For almost a decade, Vodafone NZ used the world's least secure default login for its residential modems.

*   **Username:** vodafone
*   **Password:** vodafone

*(Note: Both must be entirely lowercase).*

If your router has been disconnected from the internet for a long time, or for some reason missed the OTA (Over-The-Air) updates from One NZ, this original password will still work. However, less than 10% of active modems in NZ still use this today.

### Generation 2: The "admin" Transition (2023-2024 Updates)

When the rebrand occurred, network engineers at One NZ realized that having a миллион routers in NZ homes with the password "vodafone" was a massive security risk. They pushed a firmware update to the older UltraHubs.

This update wiped the word "vodafone" and standardized the login across the fleet to the industry default.

*   **Username:** admin
*   **Password:** admin

If "vodafone" fails, try this immediately. It is the most common successful login for an older white UltraHub in 2026.

### Generation 3: The Sticker (Modern Security Standards)

In late 2024 and 2025, cybersecurity standards shifted again. One NZ realized that "admin/admin" was barely better than "vodafone/vodafone." 

In the latest firmware updates pushed to older UltraHubs, the modems were programmed to reject generic passwords entirely and revert to a mathematically generated unique string.

Where does this string come from? **The barcode sticker on the back of your router.**

1.  Pick up your modem.
2.  Look for the white sticker containing the serial numbers and MAC addresses.
3.  Look for a field labeled **Modem Password**, **Admin Password**, or **Web Login**.
4.  It will usually be an 8 to 12 character mix of random uppercase letters and numbers (e.g., `A7X9KL2P`).

*   **Username:** admin
*   **Password:** [the random string from the sticker]

This string is unique to your specific physical device. No hacker in Russia can guess it, and no standard internet guide can tell you what it is.

<AdSenseBlock slot='article-middle' />

## What to Do If ALL of Them Fail

You have tried vodafone/vodafone, admin/admin, and the random string from the sticker. The screen just shakes and says "Login Failed."

This means only one thing: **Someone changed it.**

Perhaps you changed it three years ago and completely forgot. Perhaps a flatmate who has since moved out changed it to secure the network. Perhaps an IT contractor you hired changed it to set up your home office.

Regardless of who changed it, the current customized password is encrypted and stored in the router's memory chip. One NZ support cannot see it. They cannot email it to you. *There is no "forgot password" link for a physical piece of hardware.*

The only way back in is the **Nuclear Option: The Factory Reset.**

## How to Factory Reset the Vodafone UltraHub

A factory reset wipes the customized memory chip completely clean. It erases the custom admin password, returning it to the factory defaults (Generation 2 or 3 above). 

*Warning: This also wipes your custom Wi-Fi name and Wi-Fi password. The Wi-Fi will temporarily revert to the factory name printed on the back sticker until you log in and change it back.*

1.  Leave the router turned ON.
2.  Turn the router around so you can see the back panel where the cables plug in.
3.  Look for a tiny pinhole labeled **Reset**. (Do not confuse it with the WPS button).
4.  Unbend a paperclip or find a SIM card ejector tool.
5.  Push the tool into the hole until you feel a soft click.
6.  **Hold it down steadily for 10 to 15 seconds.**
7.  Watch the front lights. When all the lights simultaneously turn off or flash red, release the button.

The router will take about three minutes to reboot and renegotiate its connection with the Chorus fibre network.

### Logging In After the Reset

Connect your phone or laptop to the temporary "default" Wi-Fi network (the name and password are on the back sticker).

Open your browser, go to **192.168.1.254**, and try logging in again.

Start with **admin / admin**. If that fails, type the **admin password from the sticker**. One of those two will now work with 100% certainty.

## Setting a Custom Password That Matters

Once you are finally logged into the admin dashboard, the very first thing you should do is secure the router so you don't have to deal with this again.

1.  Navigate to **System**, **Administration**, or **Change Password** (the exact wording depends on which firmware version you are currently running).
2.  Enter the current password (the one that just worked).
3.  Enter a new custom password.

Here is the secret to a good router admin password: **It does not need to be highly complex, it just needs to be memorable to you and unknown to strangers.**

Do not use your Wi-Fi password. Do not use your banking password. 

Use a simple pass-phrase relating to your house. For example: `RedDoorNumber42` or `KiaOraAuckland2026`. 

Write this down in your phone's password manager app, or literally write it in sharpie on a piece of masking tape and stick it to the underside of the router where no one can see it easily.

## A Note on Vodafone Huawei HG659 Modems

If you are a very long-term Vodafone/One NZ customer (perhaps still on VDSL rather than Fibre), you might still be using the older black Huawei HG659 mode. It stands vertically on a built-in stand.

The rules for this specific model are slightly different because Huawei firmware handles resets differently than the newer Sagemcom UltraHubs.

*   The default login address is usually **192.168.1.254**, but occasionally **192.168.1.1**.
*   The default Vodafone credentials were **vodafone / vodafone**.
*   If updated by One NZ, the credentials are **admin / admin**.
*   Crucially, if you factory reset an HG659 that was originally supplied by Vodafone, it will *almost always* revert to **vodafone / vodafone**, regardless of what firmware updates One NZ pushed to it later.

The HG659 is severely outdated in 2026. It cannot handle modern Gigabit fibre speeds over Wi-Fi, and its internal processor chokes if more than 15 smart devices connect to it. If you are still using one of these black towers, call One NZ support on **0800 800 021** and ask for a free hardware upgrade. Tell them the router is constantly dropping connections and running hot. They will usually courier a modern Wi-Fi 6 router to retain you as a customer.

---

*This guide is part of the ErrorDocs NZ Telecom Rescue Series. Written and verified by NZ broadband specialists for 2026 hardware standards.*
