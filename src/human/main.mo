actor {
    var height : Float = 0.0;
    var is_awake : Bool = false;
    var age : Nat = 0;
    var favorite_show : ?Text = null;
    var favorite_animal : Text = "";
    let species : Text = "human";

    public func greet(name : Text) : async Text {
        return "Hello, " # name # "!";
    };
    public query func get_height() : async Float {
        return height;
    };
    public func set_height(_height : Float) : async () {
        height :=_height;
    };
    public func change_favorite_show(_show : ?Text): async () {
        favorite_show := _show;
    };
    public func add_to_height(_height : Float): async () {
        height += _height;
    };
    public func get_favorite_show() : async ?Text {
        return favorite_show;
    };
    public func get_favorite_animal() : async Text {
        return favorite_animal;
    };
    public func change_favorite_animal(_animal : Text): async () {
        favorite_animal := _animal;
    };
    /*hi, this is Xie's work*/
};
