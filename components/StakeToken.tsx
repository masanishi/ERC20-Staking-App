import { Card, Heading, Skeleton, Stack, Text } from "@chakra-ui/react";
import { useAddress, useBalance, useContract, useTokenBalance } from "@thirdweb-dev/react";
import { STAKE_TOKEN_ADDRESSES } from "../cost/addresses";

export default function StakeToken() {
    const address = useAddress();

    const { data: tokenBalance, isLoading: loadingTokenBalance } = useBalance(STAKE_TOKEN_ADDRESSES);
    
    return (
        <Card p={5}>
            <Stack>
                <Heading>Stake Token</Heading>
                <Skeleton h={4} w={"50%"} isLoaded={!loadingTokenBalance}>
                    <Text fontSize={"large"} fontWeight={"bold"}>${tokenBalance?.symbol}</Text>
                </Skeleton>
                <Skeleton h={4} w={"100%"} isLoaded={!loadingTokenBalance}>
                    <Text>{tokenBalance?.displayValue}</Text>
                </Skeleton>
            </Stack>
        </Card>
    )
}