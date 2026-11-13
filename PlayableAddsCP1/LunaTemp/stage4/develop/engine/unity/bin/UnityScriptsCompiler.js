if ( TRACE ) { TRACE( JSON.parse( '["ClickTarget#Awake","ClickTarget#Update","GameManager#init","GameManager#Awake","GameManager#Start","GameManager#Update","GameManager#EnterIntroScreen","GameManager#OnTargetClick","GameManager#StartGamePlay","GameManager#EnterEndScreen","PulseTarget#init","PulseTarget#Awake","PulseTarget#Update"]' ) ); }
/**
 * @version 1.0.9811.43004
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*ClickTarget start.*/
    Bridge.define("ClickTarget", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _cam: null,
            _col: null
        },
        methods: {
            /*ClickTarget.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "ClickTarget#Awake", this ); }

                this._cam = UnityEngine.Camera.main;
                this._col = this.GetComponent(UnityEngine.Collider2D);
            },
            /*ClickTarget.Awake end.*/

            /*ClickTarget.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "ClickTarget#Update", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(GameManager.Instance, null) || GameManager.Instance.State !== GameManager.GameState.GamePlay) {
                    return;
                }

                if (UnityEngine.Input.GetMouseButtonDown(0)) {
                    var world = UnityEngine.Vector2.FromVector3(this._cam.ScreenToWorldPoint(UnityEngine.Input.mousePosition));
                    if (this._col.OverlapPoint(world)) {
                        GameManager.Instance.OnTargetClick();
                    }
                }
            },
            /*ClickTarget.Update end.*/


        }
    });
    /*ClickTarget end.*/

    /*GameManager start.*/
    Bridge.define("GameManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            IntroScreen: null,
            WinScreen: null,
            Target: null,
            clicksToWin: 0,
            State: 0,
            clicks: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "GameManager#init", this ); }

                this.clicksToWin = 1;
                this.State = GameManager.GameState.Intro;
            }
        },
        methods: {
            /*GameManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "GameManager#Awake", this ); }

                GameManager.Instance = this;
            },
            /*GameManager.Awake end.*/

            /*GameManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "GameManager#Start", this ); }

                this.EnterIntroScreen();
            },
            /*GameManager.Start end.*/

            /*GameManager.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "GameManager#Update", this ); }

                if (this.State === GameManager.GameState.Intro && UnityEngine.Input.GetMouseButtonDown(0)) {
                    this.StartGamePlay();
                }
            },
            /*GameManager.Update end.*/

            /*GameManager.EnterIntroScreen start.*/
            EnterIntroScreen: function () {
if ( TRACE ) { TRACE( "GameManager#EnterIntroScreen", this ); }

                this.State = GameManager.GameState.Intro;
                this.clicks = 0;
                if (UnityEngine.GameObject.op_Inequality(this.IntroScreen, null)) {
                    this.IntroScreen.SetActive(true);
                }
                if (UnityEngine.GameObject.op_Inequality(this.WinScreen, null)) {
                    this.WinScreen.SetActive(false);
                }
                if (UnityEngine.GameObject.op_Inequality(this.Target, null)) {
                    this.Target.SetActive(false);
                }
            },
            /*GameManager.EnterIntroScreen end.*/

            /*GameManager.OnTargetClick start.*/
            OnTargetClick: function () {
if ( TRACE ) { TRACE( "GameManager#OnTargetClick", this ); }

                this.clicks = (this.clicks + 1) | 0;
                if (this.clicks >= this.clicksToWin) {
                    this.EnterEndScreen();
                }
            },
            /*GameManager.OnTargetClick end.*/

            /*GameManager.StartGamePlay start.*/
            StartGamePlay: function () {
if ( TRACE ) { TRACE( "GameManager#StartGamePlay", this ); }

                this.State = GameManager.GameState.GamePlay;
                if (UnityEngine.GameObject.op_Inequality(this.IntroScreen, null)) {
                    this.IntroScreen.SetActive(false);
                }
                if (UnityEngine.GameObject.op_Inequality(this.WinScreen, null)) {
                    this.WinScreen.SetActive(false);
                }
                if (UnityEngine.GameObject.op_Inequality(this.Target, null)) {
                    this.Target.SetActive(true);
                }
            },
            /*GameManager.StartGamePlay end.*/

            /*GameManager.EnterEndScreen start.*/
            EnterEndScreen: function () {
if ( TRACE ) { TRACE( "GameManager#EnterEndScreen", this ); }

                this.State = GameManager.GameState.End;
                if (UnityEngine.GameObject.op_Inequality(this.IntroScreen, null)) {
                    this.IntroScreen.SetActive(false);
                }
                if (UnityEngine.GameObject.op_Inequality(this.WinScreen, null)) {
                    this.WinScreen.SetActive(true);
                }
                if (UnityEngine.GameObject.op_Inequality(this.Target, null)) {
                    this.Target.SetActive(false);
                }
            },
            /*GameManager.EnterEndScreen end.*/


        }
    });
    /*GameManager end.*/

    /*GameManager+GameState start.*/
    Bridge.define("GameManager.GameState", {
        $kind: 1006,
        statics: {
            fields: {
                Intro: 0,
                GamePlay: 1,
                End: 2
            }
        }
    });
    /*GameManager+GameState end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*PulseTarget start.*/
    Bridge.define("PulseTarget", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            amount: 0,
            speed: 0,
            _daseScale: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PulseTarget#init", this ); }

                this._daseScale = new UnityEngine.Vector3();
                this.amount = 0.1;
                this.speed = 4.0;
            }
        },
        methods: {
            /*PulseTarget.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "PulseTarget#Awake", this ); }

                this._daseScale = this.transform.localScale.$clone();
            },
            /*PulseTarget.Awake end.*/

            /*PulseTarget.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "PulseTarget#Update", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(GameManager.Instance, null) || GameManager.Instance.State !== GameManager.GameState.GamePlay) {
                    return;
                }
                var s = 1.0 + Math.sin(UnityEngine.Time.deltaTime * this.speed) * this.amount;
                this.transform.localScale = this._daseScale.$clone().clone().scale( s );
            },
            /*PulseTarget.Update end.*/


        }
    });
    /*PulseTarget end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine"];

    /*ClickTarget start.*/
    $m("ClickTarget", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"_cam","t":4,"rt":$n[1].Camera,"sn":"_cam"},{"a":1,"n":"_col","t":4,"rt":$n[1].Collider2D,"sn":"_col"}]}; }, $n);
    /*ClickTarget end.*/

    /*GameManager start.*/
    $m("GameManager", function () { return {"nested":[GameManager.GameState],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"EnterEndScreen","t":8,"sn":"EnterEndScreen","rt":$n[0].Void},{"a":1,"n":"EnterIntroScreen","t":8,"sn":"EnterIntroScreen","rt":$n[0].Void},{"a":2,"n":"OnTargetClick","t":8,"sn":"OnTargetClick","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"StartGamePlay","t":8,"sn":"StartGamePlay","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"Instance","is":true,"t":16,"rt":GameManager,"g":{"a":2,"n":"get_Instance","t":8,"rt":GameManager,"fg":"Instance","is":true},"s":{"a":1,"n":"set_Instance","t":8,"p":[GameManager],"rt":$n[0].Void,"fs":"Instance","is":true},"fn":"Instance"},{"a":2,"n":"State","t":16,"rt":GameManager.GameState,"g":{"a":2,"n":"get_State","t":8,"rt":GameManager.GameState,"fg":"State","box":function ($v) { return Bridge.box($v, GameManager.GameState, System.Enum.toStringFn(GameManager.GameState));}},"s":{"a":1,"n":"set_State","t":8,"p":[GameManager.GameState],"rt":$n[0].Void,"fs":"State"},"fn":"State"},{"a":2,"n":"IntroScreen","t":4,"rt":$n[1].GameObject,"sn":"IntroScreen"},{"a":2,"n":"Target","t":4,"rt":$n[1].GameObject,"sn":"Target"},{"a":2,"n":"WinScreen","t":4,"rt":$n[1].GameObject,"sn":"WinScreen"},{"a":1,"n":"__Property__Initializer__State","t":4,"rt":GameManager.GameState,"sn":"__Property__Initializer__State","box":function ($v) { return Bridge.box($v, GameManager.GameState, System.Enum.toStringFn(GameManager.GameState));}},{"a":1,"n":"clicks","t":4,"rt":$n[0].Int32,"sn":"clicks","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"clicksToWin","t":4,"rt":$n[0].Int32,"sn":"clicksToWin","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"backing":true,"n":"<Instance>k__BackingField","is":true,"t":4,"rt":GameManager,"sn":"Instance"},{"a":1,"backing":true,"n":"<State>k__BackingField","t":4,"rt":GameManager.GameState,"sn":"State","box":function ($v) { return Bridge.box($v, GameManager.GameState, System.Enum.toStringFn(GameManager.GameState));}}]}; }, $n);
    /*GameManager end.*/

    /*GameManager+GameState start.*/
    $m("GameManager.GameState", function () { return {"td":GameManager,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"End","is":true,"t":4,"rt":GameManager.GameState,"sn":"End","box":function ($v) { return Bridge.box($v, GameManager.GameState, System.Enum.toStringFn(GameManager.GameState));}},{"a":2,"n":"GamePlay","is":true,"t":4,"rt":GameManager.GameState,"sn":"GamePlay","box":function ($v) { return Bridge.box($v, GameManager.GameState, System.Enum.toStringFn(GameManager.GameState));}},{"a":2,"n":"Intro","is":true,"t":4,"rt":GameManager.GameState,"sn":"Intro","box":function ($v) { return Bridge.box($v, GameManager.GameState, System.Enum.toStringFn(GameManager.GameState));}}]}; }, $n);
    /*GameManager+GameState end.*/

    /*PulseTarget start.*/
    $m("PulseTarget", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"_daseScale","t":4,"rt":$n[1].Vector3,"sn":"_daseScale"},{"a":2,"n":"amount","t":4,"rt":$n[0].Single,"sn":"amount","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"speed","t":4,"rt":$n[0].Single,"sn":"speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*PulseTarget end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    }});
