import * as Redstone from '@prohetamine/redstone'
import useLocalStorageState from 'use-local-storage-state'
import uniqid from 'uniqid'
import { useEffect } from 'react'

const useId = () => {
    const { address, isConnected } = Redstone.useApp()
        , [id, setId] = useLocalStorageState('hashId', { defaultValue: null })

    useEffect(() => {
        if (address && isConnected && !id) {
            setId(
                uniqid(address)
            )
        }
    }, [address, isConnected, id, setId])

    return [id, setId]
}

export default useId