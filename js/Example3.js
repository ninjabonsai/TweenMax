// namespace
this.hothouse = this.hothouse || {};

(function ()
{
    // constructor
    function Example3(content)
    {
        console.log("Example3");

        this.content = content;

        this.init();
    }

    // shortcut to reference prototypes
    var p = Example3.prototype;

    // public var
    p.content;

    // public method
    p.init = function ()
    {
        console.log("init");

        this.content.innerHTML = "Example 3";
    }

    p.remove = function()
    {
        console.log("remove Example3");

        this.content.innerHTML = "";
        this.content = undefined;

        hothouse.Example3 = null;
    }

    hothouse.Example3 = Example3;
}());