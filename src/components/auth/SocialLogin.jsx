import facebook from '../../assets/images/social-facebook.png'
import google from '../../assets/images/social-google.png'

// "or" divider + Facebook / Google buttons (UI only, no real OAuth)
export default function SocialLogin() {
  return (
    <>
      <div className="divider"><span>or</span></div>
      <div className="social">
        <button type="button" aria-label="Continue with Facebook"><img src={facebook} alt="" /></button>
        <button type="button" aria-label="Continue with Google"><img src={google} alt="" /></button>
      </div>
    </>
  )
}
