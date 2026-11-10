using UnityEngine;

public class ClickTarget : MonoBehaviour
{
    Camera _cam;

    Collider2D _col;

    private void Awake()
    {
        _cam = Camera.main;
        _col = GetComponent<Collider2D>();
    }

    void Update()
    {
        if (GameManager.Instance == null || GameManager.Instance.State != GameManager.GameState.GamePlay) return;

        if (Input.GetMouseButtonDown(0))
        {
            Vector2 world = _cam.ScreenToWorldPoint(Input.mousePosition);
            if (_col.OverlapPoint(world))
            {
                GameManager.Instance.OnTargetClick();
            }
        }
    }
}
