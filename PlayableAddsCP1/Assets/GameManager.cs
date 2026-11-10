using System;
using UnityEngine;

public class GameManager : MonoBehaviour
{
    public enum GameState { Intro, GamePlay, End }

    public static GameManager Instance {  get; private set; }

    public GameObject IntroScreen;
    public GameObject WinScreen;
    public GameObject Target;

    public int clicksToWin = 1;

    public GameState State { get; private set; } = GameState.Intro;

    private int clicks;

    private void Awake()
    {
        Instance = this;
    }

    void Start()
    {
        EnterIntroScreen();
    }

    void Update()
    {
        if (State == GameState.Intro && Input.GetMouseButtonDown(0)) StartGamePlay();
    }

    void EnterIntroScreen()
    {
        State = GameState.Intro;
        clicks = 0;
        if (IntroScreen != null) IntroScreen.SetActive(true);
        if (WinScreen != null) WinScreen.SetActive(false);
        if (Target != null) Target.SetActive(false );
    }

    public void OnTargetClick()
    {
        clicks++;
        if (clicks >= clicksToWin )
        {
            EnterEndScreen();
        }
    }

    public void StartGamePlay()
    {
        State = GameState.GamePlay;
        if (IntroScreen != null) IntroScreen.SetActive(false);
        if (WinScreen != null) WinScreen.SetActive(false);
        if (Target != null) Target.SetActive(true);
    }

    private void EnterEndScreen()
    {
        State = GameState.End;
        if (IntroScreen != null) IntroScreen.SetActive(false);
        if (WinScreen != null) WinScreen.SetActive(true);
        if (Target != null) Target.SetActive(false);
    }
}
