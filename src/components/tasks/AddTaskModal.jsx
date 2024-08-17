import { useForm } from 'react-hook-form';
import Modal from '../ui/Modal';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/features/tasks/tasksSlice';

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const onCancel = () => {
    reset();
    setIsOpen(false);
  };

  const onSubmit = (data) => {
    dispatch(addTask(data));
    onCancel();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Shawon's Task">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col mb-3">
          <label htmlFor="title" className="mb-2">
            Title
          </label>
          <input
            className="w-full rounded-md"
            type="text"
            id="title"
            {...register('title')}
          />
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="title" className="mb-2">
            Description
          </label>
          <textarea
            className="w-full rounded-md"
            type="text"
            id="description"
            {...register('description')}
          />
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="title" className="mb-2">
            Deadline
          </label>
          <input
            className="w-full rounded-md"
            type="date"
            id="date"
            {...register('date')}
          />
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="title" className="mb-2">
            Assign to
          </label>
          <select
            className="w-full rounded-md"
            id="assignedTo"
            {...register('assignedTo')}
          >
            <option value="MH Shawon">MH Shawon</option>
            <option value="Motaher Himu">Motaher Himu</option>
            <option value="Mohiuddin Shahed">Mohiuddin Shahed</option>
            <option value="Arif Modric">Arif Modric</option>
            <option value="Al Sakib">Al Sakib</option>
            <option value="Anamul KDB">Anamul KDB Firoz</option>
            <option value="Aminul kroos">Aminul kroos</option>
            <option value="Refat Shelby">Refat Shelby</option>
          </select>
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="title" className="mb-2">
            Priority
          </label>
          <select
            className="w-full rounded-md"
            id="priority"
            {...register('priority')}
          >
            <option defaultValue value="high">
              High
            </option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        <div className="flex justify-end gap-3">
          <button
            onClick={() => onCancel()}
            type="button"
            className="btn btn-danger "
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary ">
            submit
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddTaskModal;
