using UnityEngine;

public enum PlaybleState { Intro, GamePlay, End}

public class PlaybleManager : MonoBehaviour
{
    public static PlaybleManager instance { get; private set; }


    public GameObject endCard;

    public int collectTarget = 3;

    public float autoEndAfterSeconds = 3f;

    public PlaybleState State { get; private set; } = PlaybleState.Intro;


    private int _collected;
    private float _timer;

    private void Awake()
    {
        instance = this;
        if (endCard != null) endCard.SetActive(false);
    }

    private void Start()
    {
        StartGamePlay();
    }

    private void Update()
    {
        if (State != PlaybleState.GamePlay) return;
        if (autoEndAfterSeconds > 0)
        {
            _timer += Time.deltaTime;
            if (_timer > autoEndAfterSeconds) Win();
        }
    }

    public void StartGamePlay()
    {
        State = PlaybleState.GamePlay;
        _timer = 0;
        _collected = 0;
    }

    public void RegisterCollect()
    {
        _collected++;
        if (_collected >= collectTarget) Win();
    }

    void Win()
    {
        if (State == PlaybleState.Intro) return;
        State = PlaybleState.End;

        if (endCard != null) endCard.SetActive(true);
    }
}
