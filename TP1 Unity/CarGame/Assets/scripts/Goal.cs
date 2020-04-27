
using UnityEngine;
using UnityEngine.SceneManagement;

public class Goal : MonoBehaviour
{
    void OnTriggerEnter2D(Collider2D colInfo)
    {
        if(colInfo.CompareTag("Player"))
        {
            Debug.Log("PARABENS, GANHOU!");
            SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex + 1);
        }
    }
}
