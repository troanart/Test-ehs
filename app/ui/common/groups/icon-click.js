import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import { Edit } from "@mui/icons-material";
import { DialogActions } from "@mui/material";
import TextField from "@mui/material/TextField"; // Добавляем импорт для TextField

function SimpleDialog(props) {
  const { onClose, open, groupId, onDelete } = props;

  const handleClose = () => {
    onClose();
  };

  const handleDelete = () => {
    onDelete(groupId);
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>
        Ви впевненні що хочете <span className="text-red-500">видалити</span>{" "}
        групу ?
      </DialogTitle>
      <DialogActions>
        <Button
          onClick={handleDelete}
          variant="outlined"
          className="bg-red-500 hover:bg-red-600 text-white">
          Так
        </Button>
        <Button
          onClick={handleClose}
          variant="outlined"
          className="bg-sky-500 hover:bg-sky-600 text-white">
          Ні
        </Button>
      </DialogActions>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  groupId: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default function SimpleDialogDemo({ groupId, onDelete }) {
  const [open, setOpen] = React.useState(false);
  const [isEditing, setIsEditing] = useState(false); // Добавляем состояние для режима редактирования
  const [groupName, setGroupName] = useState(""); // Добавляем состояние для имени группы
  const [teacherName, setTeacherName] = useState(""); // Добавляем состояние для имени учителя

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Функция для сохранения изменений
  const handleSaveChanges = () => {
    // Здесь вы можете вызвать функцию для сохранения изменений в вашем API
    // Например: saveGroupChanges(groupId, groupName, teacherName);
    setIsEditing(false); // После сохранения изменений переводим компонент в режим просмотра
  };

  return (
    <Stack direction="row" spacing={1}>
      <IconButton
        aria-label="edit"
        color="primary"
        onClick={() => setIsEditing(!isEditing)}>
        <Edit />
      </IconButton>
      <IconButton aria-label="delete" color="primary" onClick={handleClickOpen}>
        <DeleteIcon />
      </IconButton>
      <SimpleDialog
        groupId={groupId}
        open={open}
        onClose={handleClose}
        onDelete={onDelete}
      />
      {/* Добавляем TextField и кнопку "Сохранить" */}
      {isEditing && (
        <>
          <TextField
            label="Имя группы"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
          />
          <TextField
            label="Имя учителя"
            value={teacherName}
            onChange={(e) => setTeacherName(e.target.value)}
          />
          <Button
            onClick={handleSaveChanges}
            variant="outlined"
            className="bg-blue-500 hover:bg-blue-600 text-white ml-2">
            Сохранить
          </Button>
        </>
      )}
    </Stack>
  );
}
