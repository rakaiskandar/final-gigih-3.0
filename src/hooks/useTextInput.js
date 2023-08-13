import { useCallback, useState } from "react"

const useTextInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = useCallback((e) => {
        setValue(e.target.value)
    }, []);

    return {
        value,
        onChange: handleChange
    }
}

export default useTextInput;