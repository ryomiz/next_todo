import React from 'react'
import Modal from 'react-responsive-modal'
import { useRecoilState } from 'recoil'

import { modalState } from 'src/stores'
import { Task } from 'src/types'
type Props = {
  children: React.ReactNode
}

type ReturnType = {
  modal: {
    open: boolean
    data: Task | null
  }
  onOpenModal: (arg: Task) => void
  onCloseModal: () => void
  UpdateModal: React.FC<Props>
}

export const useModal = (): ReturnType => {
  const [modal, setModal] = useRecoilState(modalState)

  const onOpenModal = (task: Task) => {
    setModal({
      open: true,
      data: task,
    })
  }

  const onCloseModal = () => {
    setModal({
      open: false,
      data: null,
    })
  }

  const UpdateModal: React.FC<Props> = (props) => {
    const { children } = props
    if (!modal.data) {
      return null
    }
    return (
      <Modal open={modal.open} onClose={onCloseModal} center>
        {children}
      </Modal>
    )
  }

  return { modal, onOpenModal, onCloseModal, UpdateModal }
}
