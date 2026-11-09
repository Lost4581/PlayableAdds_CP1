using UnityEngine;

public class TapToCollect : MonoBehaviour
{
    Camera _camera;

    Collider2D _collider;

    private void Awake()
    {
        _camera = Camera.main;
        _collider = GetComponent<Collider2D>();
    }

    void Update()
    {
        if (PlaybleManager.instance != null && PlaybleManager.instance.State != PlaybleState.GamePlay)
        {
            return;
        }
        if (Input.GetMouseButton(0))
        {
            Vector2 world = _camera.ScreenToWorldPoint(Input.mousePosition);
            if (_collider.OverlapPoint(world)) Collect();
        }

    }

    void Collect()
    {
        gameObject.SetActive(false);
        if (PlaybleManager.instance != null)
        {
            PlaybleManager.instance.RegisterCollect();
        }
    }
}
