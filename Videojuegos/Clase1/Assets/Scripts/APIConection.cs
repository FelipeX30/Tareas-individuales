/*
make request to the API
*/



using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Networking;

public class APIConection : MonoBehaviour
{
    [SerializeField] string url;
    [SerializeField] string getEndpoint;

    SimonController controller;

    // Start is called before the first frame update
    void Start()
    {
        controller = GetComponent<SimonController>();
    }


    public void GetData()
    {
        StartCoroutine(RequestGet(url + getEndpoint));
    }

    IEnumerator RequestGet(string url){
        using (UnityWebRequest www = UnityWebRequest.Get(url))
        {
            yield return www.SendWebRequest();

            if (www.result != UnityWebRequest.Result.Success)
            {
                Debug.Log("Request failed: " + www.error);
            }
            else
            {
                string result = www.downloadHandler.text;
                Debug.Log("the response was: " + result);
                controller.apiData = result;
                controller.PrepareButtons();
                
            }
        }
    }


    // Update is called once per frame
    void Update()
    {
        
    }
}
