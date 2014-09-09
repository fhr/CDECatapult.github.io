
var render_tabs = function render_tabs() {

    var tabs= [ {"id": "Diabetes", "name": "Diabetes", "pathname": "/health/examples/diabetes.html"},
                {"id": "HealthyPlaces", "name": "Healthy Places", "pathname": "/health/examples/toothpick.html"} ];

    var add_click = function add_click(id, pathname) {
        $('#' + id).click(function (e) {
            window.location.pathname = pathname;
        });
    };

    var container = $('#project-tabs');

    for (i = 0; i < tabs.length; i++) {
        var id = tabs[i]['id'];
        var name = tabs[i]['name'];
        var pathname = tabs[i]['pathname'];

        console.log ("pathname: " + pathname);
        console.log ("widnow.pathname: " + window.location.pathname);

        var clazz = (window.location.pathname == pathname) ? "active" : "inactive";

        console.log ("clazz: " + clazz);

        container.append('<li class="' + clazz + '">' +
                         '<a href="#" role="tab" data-toggle="tab" id="' + id + '">'
                         + name +
                         '</a></li>');

        add_click(id, pathname);

    };

};
