import { ScrollVedioPlayer } from "../components/scrollVedioPlayer/scrollVedioPlayer"

export default {
    title: "scrollVideo",
}

export const scrollvideo = () => <ScrollVideoPage />

const ScrollVideoPage = () => {
    return (
        <>
            <div style={{height: "100vh"}}></div>
            <ScrollVedioPlayer src="/playNode.mp4"/>
        </>
    )

}