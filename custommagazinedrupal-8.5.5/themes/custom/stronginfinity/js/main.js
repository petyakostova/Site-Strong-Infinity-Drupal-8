(function ($, Drupal, drupalSettings) {
    'use strict';

    let closestEventCount = 0,
        counter = 0,
        now = new Date(),
        dateField = $('tbody .views-field.views-field-field-event-date-and-time time');

    //console.log($('tbody .views-field-field-event-date-and-time').val());

    // set style for the future events and for the past events
    dateField.each(function () {
        let arrCurrentDate = $(this).attr('datetime').substring(0, 10).split('-');
        let currentDate = new Date(arrCurrentDate[0], arrCurrentDate[1] - 1, arrCurrentDate[2]);

        if (currentDate >= now) {
            $(this).closest('tr').css('background-color', '#E4F0DA');
            closestEventCount++;
        } else {
            $(this).closest('tr').css('background-color', '#F5F5F5');
        }
    });

    // set style for the row with closest event
    dateField.each(function () {
        let arrCurrentDate = $(this).attr('datetime').substring(0, 10).split('-');
        let currentDate = new Date(arrCurrentDate[0], arrCurrentDate[1] - 1, arrCurrentDate[2]);

        counter++;
        if (currentDate >= now && counter == closestEventCount) {
            $(this).closest('tr').css('background-color', '#b3959b');
        }
    });

})(jQuery, Drupal, drupalSettings);
