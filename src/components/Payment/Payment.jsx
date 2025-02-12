import { Box, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import {useGetTariffPlan} from "../../hooks/TarifPlan/useGetTariffPlan";
import { europDateTime } from "../../helper/helper";
import useMobileState from "../../hooks/useMobileState";
import useUser from "../../hooks/Auth/useUser";


function Payment() {
  const {currentUserData} = useUser();
  
  const {getAllTariffPlans, getAllTariffPlansPending} = useGetTariffPlan(currentUserData?.id)

  const isMobile = useMobileState()

  return (
    <Box>
      <Container>
        <Box component="h2">Payment History</Box>
        <Box sx={{mb: "35px"}}>Track your purchase history</Box>

        <Box className="paymentHistory">
          <Box className="historyList">
            {
              !isMobile ? (
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{color: "#fff"}}>Number</TableCell>
                        <TableCell sx={{color: "#fff"}}>Name</TableCell>
                        <TableCell sx={{color: "#fff"}}>Total</TableCell>
                        <TableCell sx={{color: "#fff"}}>Method</TableCell>
                        <TableCell sx={{color: "#fff", textAlign: "right"}}>Date</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {
                        getAllTariffPlans?.map(tariffPlan => (
                          <TableRow key={tariffPlan.id}>
                            <TableCell sx={{color: "#a6a6a6", borderBottom: "0"}}>{tariffPlan.id}</TableCell>
                            <TableCell sx={{color: "#fff", borderBottom: "0", fontWeight: "600"}}>{tariffPlan.tariffPlanTitle}</TableCell>
                            <TableCell sx={{color: "#fff", borderBottom: "0", fontWeight: "600"}}>{tariffPlan.tariffPlanPrice} $</TableCell>
                            <TableCell sx={{color: "#fff", borderBottom: "0"}}>method</TableCell>
                            <TableCell sx={{color: "#a6a6a6", textAlign: "right", borderBottom: "0"}}>{europDateTime(tariffPlan.created_at)}</TableCell>
                          </TableRow>
                        ))
                      }
                    </TableBody>
                  </Table>
                </TableContainer>
              ) : (
                getAllTariffPlans?.map(tariffPlan => (
                  <Box className="historyList__item" key={tariffPlan.id} sx={{mb: "10px"}}>
                    <Box className="historyList__item__inner" sx={{padding: "15px", background: "#fafafa", borderRadius: 3}}>
                      <Box className="historyList__item__info" sx={{display: "flex", justifyContent: "space-between", pb: "15px"}}>
                        <Box className="historyList__item__title" sx={{mr: "30px", color: "#1b1b1b", fontWeight: "500"}}>
                          {tariffPlan.tariffPlanTitle}
                        </Box>
                        <Box className="historyList__item__price" sx={{color: "#1b1b1b", fontWeight: "700"}}>
                          {tariffPlan.tariffPlanPrice} $
                        </Box>
                      </Box>
                      <Box className="historyList__item__subinfo" sx={{display: "flex", justifyContent: "space-between", pb: "15px"}}>
                        <Box className="historyList__item__id" sx={{color: "#8d8d8d", fontWeight: "500", fontSize: "12px"}}>
                          Operation number: {tariffPlan.id}
                        </Box>
                        <Box className="historyList__item__date" sx={{color: "#373737", fontWeight: "600", fontSize: "12px"}}>
                          {europDateTime(tariffPlan.created_at)}
                        </Box>
                      </Box>
                      <Box className="historyList__item__method" sx={{color: "rgba(27,27,27,.5)", fontWeight: "600", fontSize: "12px"}}>
                        method
                      </Box>
                    </Box>
                  </Box>
                  
                ))
              )
              
            }
          </Box>
        </Box>

      </Container>
    </Box>
  );
}

export default Payment;