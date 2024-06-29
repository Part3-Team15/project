import CancelButton from '@/components/Button/CancelButton';
import ProfileIcon from '@/components/ProfileIcon';
import { Member } from '@/types/Member.interface';

interface InvitedMemberProps {
  member: Member;
  // onCancelClick: () => void;
}

export default function MemberItem({ member }: InvitedMemberProps) {
  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center gap-2 md:gap-3'>
        {/* TODO: ProfileIcon PR 반영해야함 */}
        <ProfileIcon user={member} imgClassName='size-[34px] md:size-[38px]' fontClassName='md:text-base text-sm' />
        <p className='text-base font-medium'>{member.nickname}</p>
      </div>
      <CancelButton className='text-sm'>삭제</CancelButton>
    </div>
  );
}
