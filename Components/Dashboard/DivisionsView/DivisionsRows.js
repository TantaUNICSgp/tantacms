"use client";
import { TableCell, TableRow } from "@mui/material";
export default function DivisionsRows({
  id,
  name,
  hours,
  department,
  department2,
  group,
  special,
}) {
  const GetCondition = () => {
    if (group) return "Group";
    if (special) return "Private";
    return "Public Department";
  };
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th">{id}</TableCell>
      <TableCell align="left">{name}</TableCell>
      <TableCell align="left">
        {department ? department.name : ""}
        {department2 ? " / " + department2.name : ""}
      </TableCell>
      <TableCell align="left">{hours}</TableCell>
      <TableCell align="left">{GetCondition()}</TableCell>
    </TableRow>
  );
}
