// namespace
this.hothouse = this.hothouse || {};

(function ()
{
    // constructor
    function Example2(content)
    {
        console.log("Example2");

        this.content = content;

        this.init();
    }

    // shortcut to reference prototypes
    var p = Example2.prototype;

    // public var
    p.content;

    // public method
    p.init = function ()
    {
        console.log("init");

        this.content.innerHTML = "<p>Example 2</p>";
//        this.content.addEventListener("mousemove", mouseEvent);
    }

//    function mouseEvent(e)
//    {
//        console.log("mouseEvent Example2");
//    }

    p.remove = function ()
    {
        console.log("remove Example2");

        this.content.innerHTML = "";
//        this.content.removeEventListener("mousemove", mouseEvent);
        this.content = undefined;

        hothouse.Example2 = null;
    }

    hothouse.Example2 = Example2;
}());