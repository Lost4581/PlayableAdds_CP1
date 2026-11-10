using UnityEngine;

public class PulseTarget : MonoBehaviour
{
    public float amount = 0.1f;

    public float speed = 4f;


    private Vector3 _daseScale;

    void Awake()
    {
        _daseScale = transform.localScale;
    }

    void Update()
    {
        if (GameManager.Instance == null || GameManager.Instance.State != GameManager.GameState.GamePlay) return;
        float s = 1f + Mathf.Sin(Time.deltaTime * speed) * amount;
        transform.localScale = _daseScale * s;
    }
}
