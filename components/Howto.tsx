import { Card, Heading, Skeleton, Stack, Text } from "@chakra-ui/react";
import { useAddress, useBalance, useContract, useTokenBalance } from "@thirdweb-dev/react";
import { STAKE_TOKEN_ADDRESSES } from "../cost/addresses";

export default function Howto() {
    const address = useAddress();

    const { data: tokenBalance, isLoading: loadingTokenBalance } = useBalance(STAKE_TOKEN_ADDRESSES);
    
    return (
        <Card p={5}>
            <Stack>
                <Heading>{"Let's start!"}</Heading>
                <Skeleton w={"100%"} isLoaded={true}>
                    <Text>Please press the <Text as='b'>{'Connect Wallet'}</Text> button to connect the wallet.</Text>
                    <Text>Please Enter the amount you wish to stake and press the <Text as='b'>{'Stake'}</Text> button.</Text>
                    <Text as='b' color={'red.500'}>Staking involves two transactions, so the wallet operation occurs twice. Take care not to cancel during the process.</Text>
                    <Text>{"If successful, the 'Stake Token' should show the amount of XTR staked and the 'Reward Token' should be rewarding every minute!"}</Text>
                </Skeleton>
            </Stack>
        </Card>
    )
}