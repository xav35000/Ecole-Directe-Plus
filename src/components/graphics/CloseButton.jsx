
import "./graphics.css"
export default function CloseButton ({ className="", id="", alt, ...props }) {
    return (
<svg aria-label={alt} className={className} id={id} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" {...props}>
<path d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100ZM62.4999 28.4999L50 40.9998L37.5 28.4998C35.0147 26.0145 30.9853 26.0145 28.5 28.4998C26.0147 30.9851 26.0147 35.0145 28.5 37.4998L41 49.9998L28.5 62.4998C26.0147 64.985 26.0147 69.0145 28.5 71.4998C30.9853 73.9851 35.0147 73.9851 37.5 71.4998L50 59L62.5 71.5C64.9853 73.9853 69.0147 73.9853 71.5 71.5C73.9853 69.0147 73.9853 64.9853 71.5 62.5L59 50L71.5 37.5C73.9853 35.0147 73.9853 30.9852 71.5 28.4999C69.0147 26.0146 64.9852 26.0145 62.4999 28.4999Z" className="fill-C50000" fillRule="evenodd" clipRule="evenodd" />
</svg>
	)
}