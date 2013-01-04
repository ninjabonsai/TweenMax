(function (window)
{

    // public property
    ClassName.somePublicProperty = 1;

    // private property
    var somePrivateProperty = 1;

    function ClassName()
    {
        console.log("ClassName");
    }

    // public instance method
    ClassName.prototype.somePublicMethod = function ()
    {
        //
    };

    // public static method
    ClassName.somePublicStaticMethod = function ()
    {
        //
    };

    // private method
    function somePrivateMethod()
    {
        //
    };

    window.ClassName = ClassName;

}(window));