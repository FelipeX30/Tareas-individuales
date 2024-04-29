/*

Felipe de Araujo Barbosa

24/04/2024

*/



using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class SimonButton : MonoBehaviour
{
    [SerializeField] float delay;
    Color originalColor;

    // Start is called before the first frame update
    void Start()
    {
        originalColor = GetComponent<Image>().color;
    }

    public void Highlight(){
        StartCoroutine(ChangeColor());
    }

    IEnumerator ChangeColor(){
        GetComponent<Image>().color = Color.white;
        yield return new WaitForSeconds(delay);
        GetComponent<Image>().color = originalColor;
    }


    // Update is called once per frame
    void Update()
    {
        
    }
}
