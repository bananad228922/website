import {useState, useEffect, useRef, useLayoutEffect} from "react";


export function TestEventLoop() {
	return (
		<Test2 />
	)
}


const TestExeOrd = () => {
  useEffect(() => {
    console.log('[Commit Phase] useEffect - Side Effect');

    return () => {
      console.log('[Commit Phase] useEffect - Cleanup');
    };
  }, []);
  console.log('[Render Phase] Component rendering');
  setTimeout(() => console.log("setTimeout"), 0);
  new Promise((resolve) => resolve("resolve")).then(() => console.log("promise"));
  return null;
};


function TestAsyncRecycle() {
	const [isLoaded, setIsLoaded] = useState(false);
	const myClassRef = useRef(null);
	
	useLayoutEffect(() => {
		if (!myClassRef.current) {
			setTimeout(() => {
				// 註冊一個side effect
				myClassRef.current = new MyClass();
				setIsLoaded(true);
			}, 1000)
		}

		return () => {
			if(myClassRef.current) {
				myClassRef.current.dispose();
			}
		}
	}, [isLoaded]);
}

function TestAbort() {
	const abortController = new AbortController();
	const signal = abortController.signal;
	const myClassRef = useRef<MyClass | null>(null);

	useEffect(() => {
		function doSomething() {
			return new Promise((resolve) => {
				setTimeout(() => {
					if(signal.aborted) return;
					myClassRef.current = new MyClass();
					resolve("resolve");
				}, 1000);
			})
		}

		async function main() {
			const promise = await doSomething();
		}
		main();

		return () => {
			if (myClassRef.current) {
				myClassRef.current.dispose();
			}
			abortController.abort();
		}
	}, [])
}

function TestFlag() {
	const myClassRef = useRef(null);


	useEffect(() => {
		let isCancelled = false;
		console.log("set to false");
		setTimeout(() => {
			// 假裝經過什麼非同步時間後才執行要清理的 side effect
			if (isCancelled) return;
			myClassRef.current = new MyClass();
		}, 10000);

		return () => {
			if (!isCancelled) {
				myClassRef.current?.dispose();
			}
			console.log("set to true");
			isCancelled = true;
		}
	}, [])
}


function Test() {
	useEffect(() => {
		console.log("entry component");
		return () => {
			console.log("return");
		}
	}, [])
}

class MyClass {
	constructor() {
		this.lastLog = 0;
		this.someData = null;
		this.update = this.update.bind(this);
		this.rafId = requestAnimationFrame(this.update);
		console.log("is mounted");
	}

	dispose() {
		console.log("is unmounted");
		cancelAnimationFrame(this.rafId);
	}

	update(time) {
		requestAnimationFrame(this.update);

		if (time - this.lastLog > 500) {
			// 隨便假裝賦予數據
			this.someData = time;
			console.log("update");
			this.lastLog = time;
		}
	}
}

function TestUseState() {
	const [state, setState] = useState("state");
	useEffect(() => {
		setState("state2");
		console.log(state);
	}, [state])
}


function TestClosure() {
	let isCancelled = false;
	setTimeout(() => {
		console.log(isCancelled);
	}, 1000);
	isCancelled = true;
	return null;
}


function Test2() {
	const cancelFirstRef = useRef(true);
	const myClassRef = useRef(null);

	useEffect(() => {
		if (!cancelFirstRef.current) {
			setTimeout(() => {
				myClassRef.current = new MyClass();
			}, 1000);
		}

		return () => {
			if (!cancelFirstRef.current) {
				myClassRef.current?.dispose();
			}
			cancelFirstRef.current = false;
		}
	}, [])
	return null;
}
