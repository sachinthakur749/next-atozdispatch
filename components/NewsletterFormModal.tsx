"use client";

import { Modal } from "antd";
import React, { useState } from "react";

const NewsletterFormModal = ({ open, handleClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Modal
        // title="A to Z Dispatch NewsLetter"
        onCancel={handleClose}
        open={open}
        footer={false}
      >
        <iframe
          title="newsletter"
          width="100%"
          height="450px"
          src="https://crm.zoho.com/crm/WebFormServeServlet?rid=66ac4859d1bcd9eb1af12e11c84c1b4a647bdf925030fe80913744e6e89e370a14b5f3952da2419c4156b9e12c8dd587gid00dfb8aee14f36f459571854657cc47cab2ccde0044963f9c244ab23dd7841cf"
        ></iframe>
      </Modal>
    </>
  );
};

export default NewsletterFormModal;
