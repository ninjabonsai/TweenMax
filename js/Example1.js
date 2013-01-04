// namespace
this.hothouse = this.hothouse || {};

(function ()
{
    // constructor
    function Example1(content)
    {
        console.log("Example1 " + content.innerHTML);

        p.content = content;

        p.init();
    }

    // shortcut to reference prototypes
    var p = Example1.prototype;

    // public var
    p.content;
    p.box;

    p.mouseX = 0;
    p.mouseY = 0;

    // public method
    p.init = function ()
    {
        console.log("init");

        this.box = document.createElement("div");
        this.box.style.position = "relative";
        this.box.style.width = "100px";
        this.box.style.height = "100px";
        this.box.style.backgroundColor = "#f00";
        this.content.appendChild(this.box);

        this.content.addEventListener("mousemove", mouseEvent);
        this.content.addEventListener("touchmove", mouseEvent);
        TweenMax.ticker.addEventListener("tick", tick);
    }

    function mouseEvent(e)
    {
        console.log("mouseEvent Example1");

        e.preventDefault();

        if (e.type == "touchmove")
        {
            p.mouseX = e.touches[0].pageX;
            p.mouseY = e.touches[0].pageY;
        }
        else
        {
            p.mouseX = e.clientX;
            p.mouseY = e.clientY;
        }
    }

    function tick()
    {
//        console.log("tick");

        p.box.style.width = p.mouseX + "px";
    }

    p.remove = function ()
    {
        console.log("remove Example1");

        TweenMax.ticker.removeEventListener("tick", tick);

        //p.content.innerHTML = "";
        this.content.removeEventListener("mousemove", mouseEvent);
        this.content.removeEventListener("touchmove", mouseEvent);
        this.content.removeChild(this.box);
        this.content = undefined;
    }

    hothouse.Example1 = Example1;
}());