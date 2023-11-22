#### Purpose:
   Protect your website from DDoS attacks by implementing a captcha-based access control system.

#### Architecture:
   - Generates a random captcha on page load.
   - Monitors and limits incoming requests from each IP address.
   - Blocks IP addresses exceeding a specified request threshold.
   - Utilizes IP blocking with a cooldown period.

#### Functionality:
   - Users must correctly enter the captcha to access the site.
   - Tracks and restricts the number of requests per IP address.
   - Blocks IPs surpassing the defined request limit.
   - Provides a cooldown period for blocked IPs.

#### Screenshot:
   ![image](https://github.com/Nellose/Anti-DDoS-Web/assets/151440407/a7deb997-520e-4f4b-ae43-7b2c4f45e45b)
