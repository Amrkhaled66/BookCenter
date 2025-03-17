import AdminContainer from "src/components/ui/AdminContainer";
import AdminForm from "src/components/ui/AdminForm";
import { VscDiffAdded } from "react-icons/vsc";
import { FaBarcode } from "react-icons/fa";

const AddManualOrder = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <AdminContainer title="اٍنشاء اوردر يدوي" Icon={<VscDiffAdded />}>
      <AdminForm
        icon={<FaBarcode />}
        onSubmit={handleSubmit}
        label="كود الاوردر"
      />
    </AdminContainer>
  );
};

export default AddManualOrder;
