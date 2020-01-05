package com.organic;
import android.content.Intent; // <-- include if not already there
import com.tkporter.sendsms.SendSMSPackage;
import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen; // Import this.
import android.os.Bundle;

public class MainActivity extends ReactActivity {

 @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);
        super.onCreate(savedInstanceState);
    }

  @Override
public void onActivityResult(int requestCode, int resultCode, Intent data) {
	super.onActivityResult(requestCode, resultCode, data);
	//probably some other stuff here
	SendSMSPackage.getInstance().onActivityResult(requestCode, resultCode, data);
}
  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "organic";
  }
}
