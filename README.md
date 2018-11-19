# Site Strong Infinity Drupal 8 (Custom Magazine Site)

## with my custom theme - Strong Infinity for Drupal 8

**Site Strong Infinity Drupal 8** is a fully working magazine Drupal website (for publishing articles and events) with:
* home page showing the latest articles of all categories;
* another page displaying latest events;
* a separate page for each article’s category – Sports, Health, Fashion.

It is created with: **Drupal 8, Acquia Dev Desktop 2, JavaScript, jQuery, CSS3**.

## Description

* **Task Part I:** [Full description of part I of the task](/documents/site-building-task.pdf)
1. Installed Drupal 8.
    
2. Installed and enabled the Admin Toolbar module.

3. Choosed, installed and enabled a theme from drupal.org.

4. Created and modified content types: Article and Event. (Used taxonomy to categorize pieces of content.
   * Changed the Article content type. Reused some of the existing fields, deleted the unnecessary ones and added new, so that the Article content type ends up with the following fields:
     + Title;
     + Reading Time;
     + Image;
     + Content (edited the existing Body field and changed its label from "Body" to "Content");
     + Category – a reference field pointing to a vocabulary. Added a new Vocabulary (Article Category) and added terms to the vocabulary (Sports, Health, Fashion) in advance. Maked the Category field a select list.
     
    ![5 Steps To Your First Pushup](https://github.com/petyakostova/Site-Strong-Infinity-Drupal-8/blob/master/screenshots/sport%20articles/article-5-steps-your-first-pushup-2018-08-22-15_08_32.png)
    
   * Added a new content type Event. Reused some of the existing fields, deleted the unnecessary ones and added new, so that the Event content type ends up with the following fields:
     + Title;
     + Image;
     + Date & Time (used the default Date field);
     + Description (edited the existing Body field and changed its label from "Body" to "Description");
     + Location – the address of the event.
     
    ![Event Summer Vibes Plovuediv Meetup](https://github.com/petyakostova/Site-Strong-Infinity-Drupal-8/blob/master/screenshots/event%20pages/event-summer-vibes-plovuediv-meetup-2018-08-22-14_47_57.png)    
    
   * Reordered the fields for both content types as listed above, choosed an appropriate widget from the Manage Form Display for the edit page. Reordered them and hided the unnecessary labels from the Manage display for the actual page seen by the end user.

5. Builded category pages via Views module:
   * Events => path: /events. Get only Title, Image and Date fields. Sort the events by Date field – the most recent one should be at the top.
     + Events Page looks like this:
       ![Events Page 22.08.2018](screenshots/1-events-2018-08-22.png)
   * Sports, Health and Fashion => Fetch only articles of current category. Get only the Title, Reading Time and Image fields. Sort the articles by Content: Authored On. The latest articles should be displayed at the top.
     + Sports Page looks like this:
       ![Sports Page](screenshots/2-sports.png)
     + Health Page looks like this:
       ![Health Page](screenshots/3-health.png)
     + Fashion Page looks like this:
       ![Fashion Page](screenshots/4-fashion.png)

6. Changed the Frontpage Views page so that it displays only content of type Article.
   ![Home Page](screenshots/0-home.png)

7. Edited the main menu and added new menu links for the pages created via Views. Changed the weight so that they appear in the following order: Home, Events, Sports, Health, Fashion.

8. Add a new user role “Editor” with limited permissions. The editor is able to create, edit and delete his/her own content (Articles, Events and Pages).
   * Log in:
     ![Log in](screenshots/log-in.png)
   * Editor:  
     ![Editor](screenshots/editor.png)

9. Installed, enabled & configured the Pathauto module for user-friendly URLs: https://www.drupal.org/project/pathauto.

10. Added the “Powered by Drupal” block to the Footer region of my website.

11.Created and published real content: 5 articles per each category and 5 events.

* **Task Part II:**

12. Created a custom theme - Strong Infinity:
    ![My custom theme Strong Infinity](screenshots/my-custom-theme-strong-infinity.png)

13. Created different styles for the Events table:

    * green - for the future events (after 22.08.2018);
    * red - for the closest event (to 22.08.2018);
    * grey - for the previous events (before 22.08.2018).
    
    * Events Page looks like this for User 1 (Administrator):
      ![Events Page](screenshots/user-1-events.png)

## My solution - Explanation

   [Part I](/documents/Solution%20Part%201%20-%20Magazine%20website%20-%20my%20first%20Drupal%20website.docx)
   [Part II](/documents/Solution%20Part%202%20-%20Custom%20Site%20Strong%20Infinity.docx)
   
## [More Screenshots of My Site](screenshots/)

**Originally developed by:**
* Petya Kostova => [petyakostova](https://github.com/petyakostova)

**The Game is licensed under the GNU General Public License v3.0**
