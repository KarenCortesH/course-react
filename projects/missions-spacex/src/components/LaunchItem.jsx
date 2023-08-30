//_Importamos el heading de Chakra
import { Box, Flex, Text, Spacer, Tag, Button } from '@chakra-ui/react'
//importamos el icon
import { FcCalendar } from "react-icons/fc";
export function LaunchItem(launch) {
    return (
        <Box bg="gray.100" p={4} m={4} borderRadius="lg">
            <Flex>
                <Text fontSize="2x1">
                    Mission <strong>{launch.mission_name}</strong>
                    ({launch.launch_year})
                </Text>
                <Spacer />
                <Tag p={2} colorScheme={launch.launch_success ? "green" : "red"}>
                    {launch.launch_success ? "Sucess" : "Failure"}
                </Tag>
            </Flex>
            <Flex align="center">
                <FcCalendar />
                <Text fontSize="sm" ml={1} color="gray.500">
                    {launch.launch_date_local.split("T")[0]}
                </Text>
            </Flex>
            <Button mt={2} colorScheme='purple'> More Details</Button>
        </Box>
    )

}
